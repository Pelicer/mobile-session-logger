const express = require("express");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
const app = express();

const events = [];
const jsonParser = bodyParser.json();

app.post("/log-event", jsonParser, (req, res) => {
  console.log("New incoming event log");
  console.log(req.body);
  const eventId = uuidv4();
  events.push({ id: eventId, event: req.body });
  res.json({ id: eventId, message: "Event logged successfully" });
});

app.get("/:id", (req, res) => {
  res.json(events.filter((e) => e.id === req.params.id));
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
