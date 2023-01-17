const express = require("express");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
const app = express();

const events = [];
const jsonParser = bodyParser.json();

app.post("/log-event", jsonParser, (req, res) => {
  const eventId = uuidv4();
  events.push({ id: eventId, event: req.body });
  console.info(`Event ${eventId} created for element ${JSON.stringify(req.body)}`)
  res.json({ id: eventId, message: "Event logged successfully" });
});

app.get("/:id", (req, res) => {
  res.json('OI');
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
