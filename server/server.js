//Require Express Server
const express = require("express");
// Environment Variables
require("dotenv").config();
//Routing pages for API
const docRoutes = require("./Routes/documents");
const mongoose = require("mongoose");
const kwlRoutes = require("./Routes/knowledge_base");
const chatRoutes = require("./Routes/live_chat");
const statRoutes = require("./Routes/serverstatus");
const alrtRoutes = require("./Routes/live_alerts");
// Cors & Parsing for JSON Data
const bodyParser = require("body-parser");
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3001",
};

const app = express();
//Utilising Cors and Body Parser
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Port to Connect To
const port = 3001;
//Mongoose Connection Info
const dburl = process.env.DB_URL;
const connectionParams = {
  useUnifiedTopology: true,
};
mongoose
  .connect(dburl, connectionParams)
  .then(() => {
    console.log("Connected to the Database");
  })
  .catch((err) => {
    console.error(`Error Connecting to the Database. n${err}`);
  });

//Models
require("./Models/User");
//Run Express Server Function

//URL Prefixes before Each of the Routes
app.use("/api/documents", docRoutes);
app.use("/api/knowledgebase", kwlRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/status", statRoutes);
app.use("/api/alert", alrtRoutes);
//All Other Routes, Equivalant to a 404 Error
app.get("*", (req, res) => {
  res.send("We're Sorry, that page cannot be found..");
});
//Backend Reports Online on specified Port.
app.listen(port, () => {
  console.log(`Backend Online on Port ${port}`);
});
