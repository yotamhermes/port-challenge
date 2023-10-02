import express from "express";
import { getWidgets, addNewWidget } from "../controllers/widgetsController";

const router = express.Router();

router.get("/widgets", getWidgets);

router.post("/widgets", addNewWidget);

export default router;
