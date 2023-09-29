import { Request, Response } from "express";
import EventSchema from "../models/eventSchemaModel"; // Import your Event model or schema definition here
import { MongoServerError } from "mongodb";
import { validateSchemaStructre } from "../utils/schemaUtils";
import { SchemaValidationError } from "../utils/errorTyps";

// Controller function to get a list of all eventSchemas
export const getAllEventsSchemas = async (req: Request, res: Response) => {
  try {
    const eventSchemas = await EventSchema.find();
    res.status(200).json(eventSchemas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addNewEventSchema = async (req: Request, res: Response) => {
  try {
    const name: string = req.body?.name;
    const structure: object = req.body?.structure;

    const validationResult = validateSchemaStructre(structure);

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
    // Duplicate Key
    if (error instanceof MongoServerError && error.code === 11000) {
      res
        .status(409)
        .json({ error: "Event Schema with the same name already exists" });
    } else if (error instanceof SchemaValidationError) {
      res.status(400).json({ error: error.message });
    } else {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};
