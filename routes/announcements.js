const router = require("express").Router();
const Announcement = require("../schemas/announcement.model");

router.route("/").get((req, res) => {
  Announcement.find()
    .then((announcements => {
      announcements.sort(function(a, b) {
        return b.createdAt - a.createdAt
      })
      res.json(announcements.slice(0, 2));
    }))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const title = req.body.title;
  const desc = req.body.desc;
  const date = req.body.date;

  const newAnnouncement = new Announcement({
    title,
    desc,
    date,
  });

  newAnnouncement
    .save()
    .then(() => res.json("created new announcement"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
