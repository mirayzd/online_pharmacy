var express = require("express");

var router = express.Router();

router.get("/", function(req, res){
    //console.log("HELLOOO");
    res.render("index");
});


module.exports = router;