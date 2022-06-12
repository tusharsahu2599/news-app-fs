const express = require('express');
const router = express.Router();
const topStoriesModel = require('../models/topStories.model');


router.get('/topstories', async(req, res) => {
    try{

        const page = req.query.page || 1;
        const size = req.query.size || 10;

        let topStories = await topStoriesModel
            .find()
            .skip((page - 1) * size)
            .limit(size)
            .lean()
            .exec();

        res.send(topStories);
    }
    catch(err){
        res.send(err);
    }
})


module.exports = router;

