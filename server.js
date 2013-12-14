var express = require('express');
var facts = require('./facts').module;

var app = express();
var port = process.env.PORT || 3000;

app.get('*', function(request, response){
  response.send(facts[Math.floor(Math.random()*facts.length)]);
});

app.listen(port);