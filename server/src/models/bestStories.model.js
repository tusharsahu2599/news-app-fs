const mongoose = require('mongoose');

const bestStoriesSchema = new mongoose.Schema({
    id: Number,
    title: String,
    by: String,
    url: String,
    score: Number,
    time: Number,
    kids: [Number]
});


const bestStoriesModel = mongoose.model('beststories', bestStoriesSchema);


module.exports = bestStoriesModel;