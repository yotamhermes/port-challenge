import { Request, Response } from "express";
import EventSchema, { IEventSchema } from "../models/eventSchemaModel"; // Import your Event model or schema definition here
import Event from "../models/eventModel"; // Import your Event model or schema definition here
import { Document } from "mongoose";

// Controller function to get a list of all eventSchemas
export const getEventsOfSchema = async (req: Request, res: Response) => {
  try {
    const schemaName = req.params.schemaName.toLowerCase();

    const schema = await EventSchema.findOne({
      name: schemaName,
    });

    const events = await Event.find({ schemaId: schema?.id });

    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
