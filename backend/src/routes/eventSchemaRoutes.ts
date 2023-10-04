import express from "express";
import {
  getAllEventsSchemas,
  addNewEventSchema,
  deleteEventSchema,
  getSchemaFields
} from "../controllers/eventSchemaController";

const router: express.Router = express.Router();

router.get("/event-schemas", getAllEventsSchemas);

router.post("/event-schemas", addNewEventSchema);

router.delete("/event-schemas/:schemaId",deleteEventSchema);

router.get("/event-schemas/:schemaId/fields", getSchemaFields);

export default router;
