import express from "express";

const router = express.Router();

router.get("/charts", (req, res) => {
  res.send("Not Implemented");
});

router.get("/charts/types", (req, res) => {
  res.send("Not Implemented");
});

router.post("/charts/:chartType", (req, res) => {
  res.send("Not Implemented");
});

export default router;
