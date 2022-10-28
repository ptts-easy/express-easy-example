const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  return res.send('GET HTTP method for Read on restapi resource');
});

router.post('/', (req, res) => {
  return res.send('POST HTTP method for Create on restapi resource');
});

router.put('/', (req, res) => {
  return res.send('PUT HTTP method for Update on restapi resource');
});

router.delete('/', (req, res) => {
  return res.send('DELETE HTTP method for Delete on restapi resource');
});

module.exports = router;