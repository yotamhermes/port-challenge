import express from "express";

const router = express.Router();

router.get("/:schemaName/events", (req, res) => {
  console.log(req.params.schemaName);

  res.send("Not Implemented");
});

router.post("/:schemaName/events", (req, res) => {
  res.send("Not Implemeted");
});

export default router;
