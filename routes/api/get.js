const express = require('express');
const router = express.Router();

const News = require('../../models/news');

router.get('/filter', async (req, res) => { 
    try { const news = await News.find({
        'category': {
            $eq: req.query.category
        }
      });
        if (!news) throw Error('No Items'); 
        res.status (200).json(news) 
    }
        catch(err) { 
            res.status(400).json({ msg: err})
        } 
    }
)

router.get('/all', async (req, res) => { 
    try { const news = await News.find();
        if (!news) throw Error('No Items'); 
        res.status (200).json(news) }
        catch(err) { 
            res.status(400).json({ msg: err})
        } 
    }
)

module.exports = router