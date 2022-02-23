const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config()

const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.use(cors());
app.use(express.json());

mongoose.connect(uri, { useNewUrlParser: true, });
mongoose.connection.once('open', () => {
   console.log("connected to mongodb") 
});

const announcementRouter = require('./routes/announcements');
const eventRouter = require('./routes/events');

app.use('/announcement', announcementRouter);
app.use('/event', eventRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});