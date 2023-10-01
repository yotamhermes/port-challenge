import { Request, Response } from "express";
import EventSchema from "../models/eventSchemaModel"; // Import your Event model or schema definition here
import { MongoServerError } from "mongodb";
import { validateSchemaStructure } from "../utils/schemaUtils";
import { SchemaValidationError } from "../utils/errorTyps";

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
    const structure: object = req.body?.structure;

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
