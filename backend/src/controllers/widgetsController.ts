import { Request, Response } from "express";
import { validateSchema } from "../utils/schemaUtils";
import { SchemaValidationError } from "../utils/errorTyps";
import Widget from "../models/widgetModel";

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

export const addNewEvent = async (req: Request, res: Response) => {
//   try {
//     const schemaId = req.params.schemaId;
//     const payload = req.body;

//     const schema = await EventSchema.findOne({
//       _id: schemaId,
//     });

//     const validationResult = validateSchema(schema?.structure || {}, payload);

//     if (!validationResult.valid) {
//       throw new SchemaValidationError(validationResult.error || "");
//     }

//     const newEvent = new Event({
//       schemaId: schema?._id,
//       payload,
//     });

//     // Save it to the database
//     const result = await newEvent.save();

//     res.status(200).json(result?._id);
//   } catch (error) {
//     let status = 500;
//     let message = "Internal Server Error";

//     // Schema Structure Invalid
//     if (error instanceof SchemaValidationError) {
//       status = 400;
//       message = `Event Schema Not Valid: ${error.message}`;
//     }

//     res.status(status).json({ error: message });
//   }
};
