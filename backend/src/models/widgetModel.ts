import mongoose, { Model, Schema } from "mongoose";
import db from "../database";

// Define the Widget schema
export interface IWidget extends Document {
  title: string;
  type: string;
  schemaId: mongoose.Schema.Types.ObjectId;
  schemaField: string;
  position: {
    x: number;
    y: number;
  };
}

const positionSchema = new Schema({
  x: {
    type: Number,
  },
  y: {
    type: Number,
  },
});

// Create a mongoose schema for the Widget model
const widgetSchema = new Schema<IWidget>({
  title: {
    type: String,
  },
  type: {
    type: String,
  },
  schemaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "EventSchema",
    required: true,
  },
  schemaField: {
    type: String,
  },
  position: {
    type: positionSchema,
  },
});

// Create the IWidget model from the schema
const Widget: Model<IWidget> = db.model<IWidget>("Widget", widgetSchema);

export default Widget;
