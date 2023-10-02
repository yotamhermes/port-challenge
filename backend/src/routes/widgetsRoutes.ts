import express from "express";
import { getWidgets, addNewWidget, deleteWidget } from "../controllers/widgetsController";

const router = express.Router();

router.get("/widgets", getWidgets);

router.post("/widgets", addNewWidget);

router.delete("/widgets/:widgetId", deleteWidget);

export default router;
