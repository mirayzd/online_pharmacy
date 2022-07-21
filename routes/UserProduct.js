var express = require("express");

var router = express.Router();

router.get("/UserProduct", function(req, res){
    //console.log("HELLOOO");
    res.render("UserProduct");
});


module.exports = router;
