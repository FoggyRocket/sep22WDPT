const express = require('express');
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});
//www.tinderperritos.com/about
router.get("/about", (req, res, next) => {
  res.render("index");
});
router.get("/qa", (req, res, next) => {
  res.render("index");
});

module.exports = router;
