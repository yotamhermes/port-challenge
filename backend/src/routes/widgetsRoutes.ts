import express from "express";
import {
  getWidgets,
  addNewWidget,
  deleteWidget,
  updateLayout,
} from "../controllers/widgetsController";

const router = express.Router();

router.get("/widgets", getWidgets);

router.post("/widgets", addNewWidget);

router.delete("/widgets/:widgetId", deleteWidget);

router.put("/widgets/layout", updateLayout);

export default router;
