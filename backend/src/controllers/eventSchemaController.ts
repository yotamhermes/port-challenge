import { Request, Response } from "express";
import EventSchema from "../models/eventSchemaModel"; // Import your Event model or schema definition here

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
    const name: String = req.body?.name;
    const structure: Object = req.body?.structure;

    const newEventSchema = new EventSchema({
      name,
      structure,
    });

    // Save it to the database
    const result = await newEventSchema.save();

    res.status(200).json(result?._id);
  } catch (error) {
    console.error(error);

    res.status(500).json({ error: "Internal Server Error" });
  }
};
