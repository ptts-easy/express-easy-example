const express = require('express');
//const routes = require('./routes/index.route');

var app = express();


//app.use('/', routes);

app.get('/', (req, res) => {
  res.send('Hello MVC!')
});

module.exports = app;