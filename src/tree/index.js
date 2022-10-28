const express = require('express');
//const main_page = require('./main-page/index.route');

var app = express();


//app.use('/', main_page);

app.get('/', (req, res) => {
  res.send("<h1>Hello Tree !!!</h1> <br> <a href='/'>Home</a>");
});

module.exports = app;