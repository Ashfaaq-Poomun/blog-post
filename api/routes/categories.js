const router = require("express").Router();
const Category = require("../models/Category");

//Create a new category
router.post("/", async (req, res) => {
  const newCat = new Category(req.body);
  try {
    const savedCat = await newCat.save();
    res.status(200).json(savedCat);
  } catch (err) {
    console.error(err.message);
    res.status(500).json(err);
  }
});

//Get all categories
router.get("/", async (req, res) => {
  try {
    const cats = await Category.find();
    res.status(200).json(cats);
  } catch (err) {
    console.error(err.message);
    res.status(500).json(err);
  }
});

module.exports = router;
