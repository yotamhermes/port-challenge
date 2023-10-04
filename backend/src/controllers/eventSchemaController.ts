import { Request, Response } from "express";
import EventSchema from "../models/eventSchemaModel";
import Event from "../models/eventModel";
import { MongoServerError } from "mongodb";
import { validateSchemaStructure } from "../utils/schemaUtils";
import { SchemaValidationError } from "../utils/errorTyps";

type EventSchemaField = {
  fieldName: string;
  fieldType: string;
};

// Controller function to get a list of all eventSchemas
export const getAllEventsSchemas = async (req: Request, res: Response) => {
  try {
    const eventSchemas = await EventSchema.find();
    const result = eventSchemas.map((x) => ({
      id: x._id,
      name: x.name,
      fields: Object.keys(x.structure.properties),
    }));
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addNewEventSchema = async (req: Request, res: Response) => {
  try {
    const name: string = req.body?.name;
    const fields: EventSchemaField[] = req.body?.fields;
    const acc: { [key: string]: any } = {};

    const structure = {
      type: "object",
      properties: fields.reduce((acc, item) => {
        acc[item.fieldName] = { type: item.fieldType };
        return acc;
      }, acc),
    };

    const validationResult = validateSchemaStructure(structure);

    if (!validationResult.valid) {
      throw new SchemaValidationError(validationResult.error || "");
    }

    const newEventSchema = new EventSchema({
      name,
      structure,
    });

    // Save it to the database
    const result = await newEventSchema.save();

    res.status(200).json(result?._id);
  } catch (error) {
    let status = 500;
    let message = "Internal Server Error";

    // Duplicate Key
    if (error instanceof MongoServerError && error.code === 11000) {
      status = 409;
      message = "Event Schema with the same name already exists";
    }

    // Schema Structure Invalid
    if (error instanceof SchemaValidationError) {
      status = 400;
      message = `Event Schema Structure Not Valid: ${error.message}`;
    }

    res.status(status).json({ error: message });
  }
};

export const deleteEventSchema = async (req: Request, res: Response) => {
  const schemaId = req.params.schemaId;
  const schema = await EventSchema.findOne({ _id: schemaId });

  await Event.deleteMany({ schemaId: schema?._id });

  await EventSchema.deleteOne({ _id: schemaId });

  res.status(200).json("deleted");
};

export const getSchemaFields = async (req: Request, res: Response) => {
  try {
    const schemaId = req.params.schemaId;

    const schema = await EventSchema.findOne({
      _id: schemaId,
    });

    const acc: EventSchemaField[] = [];

    const result = Object.entries(schema?.structure?.properties || {}).reduce(
      (acc, item) => {
        acc.push({
          fieldName: item[0],
          fieldType: item[1]["type"],
        });

        return acc;
      },
      acc
    );

    res.status(200).json(result);
  } catch (error) {
    let status = 500;
    let message = "Internal Server Error";

    res.status(status).json({ error: message });
  }
};
