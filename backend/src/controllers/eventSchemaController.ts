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
