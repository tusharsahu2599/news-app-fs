const express = require('express');
const router = express.Router();
const bestStoriesModel = require('../models/bestStories.model');


router.get('/beststories', async(req, res) => {
    try{
        const page = req.query.page || 1;
        const size = req.query.size || 10;
        var bestStories = await bestStoriesModel
            .find()
            .skip((page - 1) * size)
            .limit(size)
            .lean()
            .exec();


        res.send(bestStories);
    }
    catch(err){
        res.send(err);
    }
})
     



module.exports = router;