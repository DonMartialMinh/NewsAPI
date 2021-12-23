const express = require("express");
const router = express.Router();

const News = require("../../models/news");

router.get("/:pagenumber/filter", async (req, res) => {
  try {
    const news = await News.find({
      category: {
        $eq: req.query.category,
      },
    })
      .limit(10)
      .skip(10 * req.params.pagenumber);
    if (!news) throw Error("No Items");
    res.status(200).json(news);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

router.get("/all/:pagenumber", async (req, res) => {
  try {
    const news = await News.find()
      .limit(10)
      .skip(10 * req.params.pagenumber);
    if (!news) throw Error("No Items");
    res.status(200).json(news);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

module.exports = router;
