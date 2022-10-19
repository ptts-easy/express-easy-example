const express = require('express');
const main_page = require('./main-page/index.route');

var app = express();

app.use('/', main_page);

export default app;