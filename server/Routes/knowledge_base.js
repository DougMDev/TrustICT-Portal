const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Knowledge Base API Request");
});

module.exports = router;
