const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    date: { type: String, required: true },
},
{
    timestamps: true,
});

const Announcement = mongoose.model('Announcement', announcementSchema);
module.exports = Announcement;