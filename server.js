'use strict';

var express = require("express");
var app = express();
var path = __dirname + '/public/';

app.use(express.static(path));

app.listen(80,function(){
  console.log("Live at Port 80");
});
