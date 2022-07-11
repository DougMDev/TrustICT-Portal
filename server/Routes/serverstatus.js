const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Server Status API Request");
});

module.exports = router;
