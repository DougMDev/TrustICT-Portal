const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Live Chat API Request");
});

module.exports = router;
