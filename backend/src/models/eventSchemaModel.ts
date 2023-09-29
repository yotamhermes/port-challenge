import { Model, Schema } from "mongoose";
import db from "../database";

// Define the EventSchema schema
export interface IEventSchema extends Document {
  name: string;
  structure: object;
}

// Create a mongoose schema for the Event model
const eventSchemaSchema = new Schema<IEventSchema>({
  name: {
    type: String,
    required: true,
    index: { unique: true },
  },
  structure: {
    type: Object,
    required: true,
  },
});

// Create the EventSchema model from the schema
const EventSchema: Model<IEventSchema> = db.model<IEventSchema>(
  "EventSchema",
  eventSchemaSchema
);

export default EventSchema;
