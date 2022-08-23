var express = require('express');
var app = express();
require("dotenv/config");

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.get('/restapi', (req, res) => {
  return res.send('GET HTTP method for Read on restapi resource');
});

app.post('/restapi', (req, res) => {
  return res.send('POST HTTP method for Create on restapi resource');
});

app.put('/restapi', (req, res) => {
  return res.send('PUT HTTP method for Update on restapi resource');
});

app.delete('/restapi', (req, res) => {
  return res.send('DELETE HTTP method for Delete on restapi resource');
});

console.log("Server Listend : ", process.env.SERVER_PORT);

app.listen(process.env.SERVER_PORT);