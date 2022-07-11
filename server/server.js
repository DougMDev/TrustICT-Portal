const express = require("express");
const testRoutes = require("./Routes/test");
const port = 3001;

const app = express();

app.use("/api", testRoutes);

app.get("*", (req, res) => {
  res.send("We're Sorry, that page cannot be found..");
});

app.listen(port, () => {
  console.log(`Backend Online on Port ${port}`);
});
