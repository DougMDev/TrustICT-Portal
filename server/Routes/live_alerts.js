const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Live Alerts API Request");
});

module.exports = router;
