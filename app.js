var http = require('http');
var express = require("express");
var path = require ("path");
var routes = require("./routes/home");
var routes = require("./routes/UserProduct");
var app = express();

//const express = require("express");
//const app = express();
//const mongoose = require("mongoose");

//app.listen(3000, () => {
//    console.log("Backend server is running!");
//})

app.set("port", process.env.PORT || 3000);

app.set("views", path.join(__dirname, "views"));
app.set("view engine","ejs");

app.use(routes);
app.use('/css', express.static(path.resolve(__dirname, "views/css")))
app.use('/img', express.static(path.resolve(__dirname, "views/img")))
app.use('/image', express.static(path.resolve(__dirname, "views/image")))
app.use('/js', express.static(path.resolve(__dirname, "views/js")))


app.listen(app.get("port"), function(){
    console.log("Server started on port " + app.get("port"));
});

