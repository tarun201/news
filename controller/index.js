var express = require('express');
var router = express.Router();

var lc = require('./categoryController');
var category_lang=require('./lang_categoryController');
var lang = require('./languageController');
var dates=require('./dateController');
var sources=require('./sourceController');
var news_lang=require('./news_langController');
var news_category=require('./news_categoryController');

router.get('/category',lc.getCategories);
router.get('/language',lang.getLangs);
router.get('/date',dates.getDates);
router.get('/category/:lang',category_lang.getCategories);
router.get('/source',sources.getSources);
router.get('/news/lang/:lang',news_lang.getNews);
router.get('/news/category/:category',news_category.getNews);

module.exports = router;
