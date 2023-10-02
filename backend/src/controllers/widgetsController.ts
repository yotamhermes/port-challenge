import { Request, Response } from "express";
import { SchemaValidationError } from "../utils/errorTyps";
import Widget from "../models/widgetModel";
import EventSchema from "../models/eventSchemaModel";

// Controller function to get a list of all events
export const getWidgets = async (req: Request, res: Response) => {
  try {
    const result = await Widget.find();

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addNewWidget = async (req: Request, res: Response) => {
  try {
    const widget = req.body;
    const schema = await EventSchema.findOne({
      _id: widget.schemaId,
    });

    const newWidget = new Widget({
      title: widget.title,
      type: widget.type,
      schemaId: schema?._id,
      schemaField: widget.schemaField,
      position: {
        x: widget.position?.x,
        y: widget.position?.y,
      },
    });

    // Save it to the database
    const result = await newWidget.save();

    res.status(200).json(result?._id);
  } catch (error) {
    let status = 500;
    let message = "Internal Server Error";

    res.status(status).json({ error: message });
  }
};
