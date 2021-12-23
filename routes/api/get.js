const express = require("express");
const router = express.Router();

const News = require("../../models/news");

function CategoryNormalize(category) {
  const result = new String(category);
  switch (category) {
    case "thegioi":
      result = "Thế giới";
      break;
    case "thoisu":
      result = "Thời sự";
      break;
    case "xahoi":
      result = "Xã hội";
      break;
    case "phapluat":
      result = "Pháp luật";
      break;
    case "kinhdoanh":
      result = "Kinh doanh";
      break;
    case "thethao":
      result = "Thể thao";
      break;
    case "suckhoe":
      result = "Sức khỏe";
      break;
    case "giaitri":
      result = "Giải trí";
      break;
  }
  return result;
}
router.get("/:pagenumber/:category", async (req, res) => {
  try {
    const news = await News.find({
      category: {
        $eq: CategoryNormalize(req.params.category),
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
