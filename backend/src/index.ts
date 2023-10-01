import "dotenv/config";
import express from "express";
import cors from "cors";
import config from "./config";
import eventSchemaRoutes from "./routes/eventSchemaRoutes";
import eventRoutes from "./routes/eventRoutes";
import widgetsRoutes from "./routes/widgetsRoutes";
console.log("starting with config: ", config);

const app: express.Application = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Define API routes
app.use("/api", eventSchemaRoutes);
app.use("/api", eventRoutes);
app.use("/api", widgetsRoutes);

// Listening
app.listen(config.port, () => {
  console.log("Server Listening on PORT:", config.port);
});
