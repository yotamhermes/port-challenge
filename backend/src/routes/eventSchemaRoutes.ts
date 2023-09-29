import express from "express";
import {
  getAllEventsSchemas,
  addNewEventSchema,
} from "../controllers/eventSchemaController";

const router: express.Router = express.Router();

router.get("/event-schemas", getAllEventsSchemas);

router.post("/event-schemas", addNewEventSchema);

router.delete("/event-schemas/:schemaId", (req, res) => {
  res.send("Not Implemeted");
});

export default router;
