const express = require("express");
const router = express.Router();

const News = require("../../models/news");

function CategoryNormalize(category) {
  var result = new String(category);
  switch (category) {
    case "world":
      result = "Thế giới";
      break;
    case "news":
      result = "Thời sự";
      break;
    case "social":
      result = "Xã hội";
      break;
    case "law":
      result = "Pháp luật";
      break;
    case "business":
      result = "Kinh doanh";
      break;
    case "sport":
      result = "Thể thao";
      break;
    case "health":
      result = "Sức khỏe";
      break;
    case "entertainment":
      result = "Giải trí";
      break;
    case "peoplemayread":
      result = "Bạn đọc";
      break;
  }
  return result;
}
router.get("/:pagenumber/filter", async (req, res) => {
  try {
    const news = await News.find({
      category: {
        $eq: CategoryNormalize(req.query.category),
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
