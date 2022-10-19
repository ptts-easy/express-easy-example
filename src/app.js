const express = require('express');
const mvc = require('./mvc');

//const tree = require('./tree');
//const rest_routes = require('./restapi/index.route');
const path = require('path')
require("dotenv/config");

var app = express();

app.use(express.static('public'))
//app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/mvc', mvc);
//app.use('/tree', tree);
//app.use('/api', rest_routes);

const port = process.env.SERVER_PORT | 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
  
//console.log("Server Listend : ", process.env.SERVER_PORT);

//app.listen(process.env.SERVER_PORT);