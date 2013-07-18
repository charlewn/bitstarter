var express = require('express');

var fs = require('fs');

var content = fs.readFileSync("index.html");

var buffer = new Buffer(content, "utf-8");

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  
  response.send(buffer.toString("utf-8"));
});

var port = process.env.PORT || 8080;

//using the css directory
app.use("/css",express.static(__dirname+"/css"));

app.listen(port, function() {
  console.log("Listening on " + port);
});
