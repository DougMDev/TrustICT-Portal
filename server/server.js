//Require Express Server
const express = require("express");
//Routing pages for API
const docRoutes = require("./Routes/documents");
const kwlRoutes = require("./Routes/knowledge_base");
const chatRoutes = require("./Routes/live_chat");
const statRoutes = require("./Routes/serverstatus");
const alrtRoutes = require("./Routes/live_alerts");
//Port to Connect To
const port = 3001;
//Run Express Server Function
const app = express();
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
