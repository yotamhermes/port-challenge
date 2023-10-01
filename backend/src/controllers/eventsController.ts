import { Request, Response } from "express";
import EventSchema from "../models/eventSchemaModel";
import Event from "../models/eventModel";
import { validateSchema } from "../utils/schemaUtils";
import { SchemaValidationError } from "../utils/errorTyps";

// Controller function to get a list of all events
export const countEventsOfSchema = async (req: Request, res: Response) => {
  try {
    const schemaId = req.params.schemaId;
    const field = req.query.countBy;

    if (!schemaId || !field) {
      throw new Error("invalid params");
    }

    const schema = await EventSchema.findOne({
      _id: schemaId,
    });

    const countBy = await Event.aggregate([
      {
        $match: {
          schemaId: schema?._id,
        },
      },
      {
        $group: {
          _id: `$payload.${field}`,
          count: { $sum: 1 },
        },
      },
    ]);

    res.status(200).json(countBy);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addNewEvent = async (req: Request, res: Response) => {
  try {
    const schemaId = req.params.schemaId;
    const payload = req.body;

    const schema = await EventSchema.findOne({
      _id: schemaId,
    });

    const validationResult = validateSchema(schema?.structure || {}, payload);

    if (!validationResult.valid) {
      throw new SchemaValidationError(validationResult.error || "");
    }

    const newEvent = new Event({
      schemaId: schema?._id,
      payload,
    });

    // Save it to the database
    const result = await newEvent.save();

    res.status(200).json(result?._id);
  } catch (error) {
    let status = 500;
    let message = "Internal Server Error";

    // Schema Structure Invalid
    if (error instanceof SchemaValidationError) {
      status = 400;
      message = `Event Schema Not Valid: ${error.message}`;
    }

    res.status(status).json({ error: message });
  }
};
