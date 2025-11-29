const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ status: "Backend OK", time: new Date() });
});

module.exports = router;

