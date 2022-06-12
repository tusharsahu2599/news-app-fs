const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    id: Number,
    title: String,
    by: String,
    url: String,
    score: Number,
    time: Number,
    kids: [Number]
});


const newsModel = mongoose.model('newstories', newsSchema);


module.exports = newsModel;

