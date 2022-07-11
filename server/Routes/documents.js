const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Documents API Request");
});

module.exports = router;
