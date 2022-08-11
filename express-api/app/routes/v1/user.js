const express = require("express");
const router = express.Router();

router.get("/test", (_req, res) => {
  res.json({ message: "This is user api" });
});

module.exports = router;
