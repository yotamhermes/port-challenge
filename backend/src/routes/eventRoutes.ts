import express from "express";
import { getEventsOfSchema } from "../controllers/eventsController";

const router = express.Router();

router.get("/:schemaName/events", getEventsOfSchema);

router.post("/:schemaName/events", (req, res) => {
  res.send("Not Implemeted");
});

export default router;
