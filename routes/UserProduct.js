var express = require("express");

var router = express.Router();

router.get("/", function(req, res){
    //console.log("HELLOOO");
    res.render("UserProduct");
});

module.exports = router;