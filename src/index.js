var express = require('express');
var app = express();
require("dotenv/config");

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.get('/users', (req, res) => {
  return res.send('GET HTTP method on user resource');
});

app.post('/users', (req, res) => {
  return res.send('POST HTTP method on user resource');
});

app.put('/users', (req, res) => {
  return res.send('PUT HTTP method on user resource');
});

app.delete('/users', (req, res) => {
  return res.send('DELETE HTTP method on user resource');
});

app.listen(process.env.SERVER_PORT);