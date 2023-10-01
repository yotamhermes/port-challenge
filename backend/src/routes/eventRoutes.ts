import express from "express";
import {
  addNewEvent,
  countEventsOfSchema,
} from "../controllers/eventsController";

const router = express.Router();

router.get("/:schemaId/events", countEventsOfSchema);

router.post("/:schemaId/events", addNewEvent);

export default router;
