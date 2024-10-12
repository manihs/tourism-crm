var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('', function(req, res, next) {
  res.send('list all tourism');
});

router.post('', function(req, res, next) {
    res.send('create Tourism Package');
});

router.put('', function(req, res, next) {
    res.send('update Tourism Package');
});

router.delete('', function(req, res, next) {
    res.send('delete Tourism Package');
});


module.exports = router;
