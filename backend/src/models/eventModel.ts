import mongoose, { Model, Schema } from "mongoose";
import db from "../database";

// Define the EventSchema schema
export interface IEvent extends Document {
  schemaId: mongoose.Schema.Types.ObjectId;
  payload: object;
}

// Create a mongoose schema for the Event model
const eventSchema = new Schema<IEvent>({
  schemaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "EventSchema",
    required: true,
  },
  payload: {
    type: Object,
    required: true,
  },
});

// Create the EventSchema model from the schema
const Event: Model<IEvent> = db.model<IEvent>("Event", eventSchema);

export default Event;
