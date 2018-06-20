var express = require('express');
var router = express.Router();

var lc = require('./categoryController');
var lang = require('./languageController');

router.get('/category',lc.getCategories);
router.get('/language',lang.getLangs);

module.exports = router;
