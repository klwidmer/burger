const express = require("express");
const reload = require("reload");
const router = express.Router();
const burger = require("../models/burger")

router.get("/", function(req, res) {
      burger.all(function(burger_data) {
        res.render("index", {burger_data: burger_data});
      })
});

router.get("/burgers", function (req, res) {
  res.render("burgers", {burger: "swiss mushroom"});
});



router.put("/burgers", function (req, res) {
  //connect to burger model 
});


module.exports = router;