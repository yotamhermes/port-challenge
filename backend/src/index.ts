import "dotenv/config";
import express from "express";
import config from "./config";
import eventSchemaRoutes from "./routes/eventSchemaRoutes";
import eventRoutes from "./routes/eventRoutes";
import chartRoutes from "./routes/chartRoutes";

console.log("starting with config: ", config);


const app: express.Application = express();

// Middlewares
app.use(express.json());

// Define API routes
app.use("/api", eventSchemaRoutes);
app.use("/api", eventRoutes);
app.use("/api", chartRoutes);

// Listening
app.listen(config.port, () => {
  console.log("Server Listening on PORT:", config.port);
});
