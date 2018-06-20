var express = require('express');
var router = express.Router();

var lc = require('./languageController');

router.get('/languages',lc.getLanguages);

module.exports = router;
