const express = require("express");
const reload = require("reload");
const router = express.Router();
const burger = require("../models/burger");
const util = require('util');

router.get("/", function(req, res) {
      burger.all(function(burger_data) {
        res.render("index", {burger_data: burger_data});
      })
});
router.post("/burgers", function (req, res) {
    
      burger.insert(req.body, function(burger_data){
            res.render("index", {burger_data: burger_data});
      })
});
router.put("/eatburger/:id", function (req, res) {
      var burgerID = req.params.id;
      var burgerState = req.body.st;
   
      if(burgerState === "1"){
            burgerState = "0";
      }else{
            burgerState = "1";
      }
     
      burger.update(burgerID, burgerState, function(results){
            res.sendStatus(200);
      })
});


module.exports = router;