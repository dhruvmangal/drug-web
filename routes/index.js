var express = require('express');
var router = express.Router();

var adminRouter = require('./admin/adminRouter');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/admin', adminRouter);
module.exports = router;
