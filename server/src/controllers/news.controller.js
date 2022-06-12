const express = require('express');
const router = express.Router();
const newsModel = require('../models/news.model');


router.get('/newstories', async(req, res) => {
    try{

        const page = req.query.page || 1;
        const size = req.query.size || 10;

        let news = await newsModel
        .find()
            .skip((page - 1) * size)
            .limit(size)
            .lean()
            .exec();

        res.send(news);
    }
    catch(err){
        res.send(err);
    }
}
);


module.exports = router;