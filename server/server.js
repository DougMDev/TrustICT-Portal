const express = require("express");
const port = 3001;

const app = express();

app.get("/", (req, res) => {
  res.send("Backend Online");
});

app.listen(port, () => {
  console.log(`Backend Online on Port ${port}`);
});
