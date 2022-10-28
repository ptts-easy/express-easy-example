const express = require('express');
const routes = require('./routes/index.route');
var path = require('path');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'hbs');

//app.get('/', (req, res) => {
//  res.send("<h1>Hello MVC !!!</h1> <br> <a href='/'>Home</a>");
//});

app.use('/', routes);

module.exports = app;