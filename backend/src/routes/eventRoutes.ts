import express from "express";
import {
  addNewEvent,
  getEventsOfSchema,
} from "../controllers/eventsController";

const router = express.Router();

router.get("/:schemaId/events", getEventsOfSchema);

router.post("/:schemaId/events", addNewEvent);

export default router;
