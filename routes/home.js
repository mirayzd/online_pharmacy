var express = require("express");

var router = express.Router();

router.get("/", function(req, res){
    //console.log("HELLOOO");
    res.render("index");
});



router.get("/UserCart", function(req, res){
    //console.log("HELLOOO");
    res.render("users/UserCart");
});

router.get("/UserOrderHistory", function(req, res){
    //console.log("HELLOOO");
    res.render("users/UserOrderHistory");
});

router.get("/UserPayment", function(req, res){
    //console.log("HELLOOO");
    res.render("users/UserPayment");
});

router.get("/UserProduct", function(req, res){
    res.render("users/UserProduct");
});

router.get("/UserProfile", function(req, res){
    //console.log("HELLOOO");
    res.render("users/UserProfile");
});

router.get("/UserReceipt", function(req, res){
    //console.log("HELLOOO");
    res.render("users/UserReceipt");
});

module.exports = router;