

const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
const cors = require('cors');
const topsController = require('./src/controllers/tops.controller');
const bestStoriesController = require('./src/controllers/bestStories.controller');
const newsController = require('./src/controllers/news.controller');
const { connect } = require('./src/configs/db');
app.use(express.json());
app.use(cors());


app.get('/topstories', topsController);
app.get('/beststories', bestStoriesController);
app.get('/newstories', newsController);


app.listen(port, () => {
    connect();
    console.log(`Server is running on port ${port}`);
}
);




