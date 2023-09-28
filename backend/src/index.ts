import "dotenv/config";
import express from "express";
import config from "./config";

const app: express.Application = express();
app.use(express.json());

console.log("starting with config: ", config);

app.listen(config.port, () => {
  console.log("Server Listening on PORT:", config.port);
});
