const mongoose = require('mongoose');

const topStoriesSchema = new mongoose.Schema({
    id: Number,
    title: String,
    by: String,
    url: String,
    score: Number,
    time: Number,
    kids: [Number]
});


const topStoriesModel = mongoose.model('topstories', topStoriesSchema);


module.exports = topStoriesModel;