import mongoose from "mongoose";
import config from "./config";

// Define the MongoDB connection URL
const mongoURI = `mongodb://${config.database.host}:${config.database.port}/${config.database.databaseName}`;

// Establish the MongoDB connection
mongoose.connect(mongoURI);

const db = mongoose.connection;

// Handle MongoDB connection events
db.on("error", (error) => {
  console.error("MongoDB connection error:", error)
});

db.once("open", () => {
  console.log("Connected to MongoDB database");
});

export default db;
