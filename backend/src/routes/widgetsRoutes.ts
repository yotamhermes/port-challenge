import express from "express";
import { getWidgets } from "../controllers/widgetsController";

const router = express.Router();

router.get("/widgets", getWidgets);

router.get("/charts/types", (req, res) => {
  res.send("Not Implemented");
});

router.post("/charts/:chartType", (req, res) => {
  res.send("Not Implemented");
});

export default router;
