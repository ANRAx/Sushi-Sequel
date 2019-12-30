let express = require("express");

let router = express.Router();
let burger = require("../models/sushi.js");

// get route -> index
router.get("/", function(req, res) {
    res.redirect("/sushi");
});

router.get("/burgers", function(req, res) {
    // express callback response by calling burger.selectAllBurger
    burger.all(function(sushiData) {
        // Wrapper for orm.js thats using MySQL query callback will return bruger_data, render to index with handlebar
        res.render("index", { sushi_data: shushiData})
    });
});

// post route -> back to index
router.post("/sushi/create", function(req, res) {
    // takes the request object using it as input for sushi.addSushi
    sushi.create(req.body.sushi_name, function(result) {
        // wrapper for orm.js using MySQL insert callback will return a log to console
        // render back to index with handle
        console.log(result);
        res.redirect("/");
    });
});