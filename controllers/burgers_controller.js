const express = require("express");
const reload = require("reload");
const router = express.Router();

router.get("/", function(req, res) {
      let burgers = [
        {
          id: 1,
          burger_name: "Bacon Cheese",
          devoured: false
        }, {
          id: 2,
          burger_name: "Classic",
          devoured: false
        }, {
          id: 3,
          burger_name: "Western",
          devoured: true
        }
      ];
    res.render("index", burgers);
});
router.get("/burgers", function (req, res) {
  res.render("burgers", {burger: "swiss mushroom"});
});


module.exports = router;