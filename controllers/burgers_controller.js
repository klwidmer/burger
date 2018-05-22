const express = require("express");
const reload = require("reload");
const router = express.Router();
const burger = require("../models/burger")

router.get("/", function(req, res) {
      burger.all(function(burger_data) {
        res.render("index", {burger_data: burger_data});
      })
});
router.post("/burgers", function (req, res) {
      console.log(req.body)
      burger.insert(req.body, function(burger_data){
            res.render("index", {burger_data: burger_data});
      })
});
// router.put("/burgers", function (req, res) {
//   res.render("index", {burger_data: burger_data});
// });


module.exports = router;