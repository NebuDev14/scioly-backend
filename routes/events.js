const router = require("express").Router();
let Event = require("../schemas/event.model");

router.route("/").get((req, res) => {
  // /event
  Event.find()
    .then((events => res.json(events)))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const date = req.body.date;

  const newEvent = new Event({
    name,
    date,
  });

  newEvent
    .save()
    .then(() => res.json("created new event"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
