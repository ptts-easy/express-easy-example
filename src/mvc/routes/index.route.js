const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 // let title = 'Express';, 
//  res.render('index', { title: "MVC", contents: `<h1>{{title}}</h1> <p>Welcome to {{title}}</p>`});
  res.render('index', { title: "MVC", contents: "aaaaa"});
});

module.exports = router;