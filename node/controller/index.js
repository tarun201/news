var express = require('express');
var router = express.Router();

var category = require('./categoryController');
var lang_category=require('./lang_categoryController');
var lang = require('./languageController');
var dates=require('./dateController');
var sources=require('./sourceController');
var news_lang=require('./news_langController');
var news_category=require('./news_categoryController');
var lc=require('./lcController');//lc -> Language Category
var lo=require('./loController');// lo -> Limit Offset
var news=require('./newsController');

router.get('/category',category.getCategories);
router.get('/language',lang.getLangs);
router.get('/date',dates.getDates);
router.get('/category/:lang',lang_category.getCategories);
router.get('/source',sources.getSources);
router.get('/news/lang/:lang',news_lang.getNews);
router.get('/news/category/:category',news_category.getNews);
router.get('/news/:lang/:category',lc.getLC);
router.get('/news/:limit/:offset',lo.getLO);
router.get('/news',news.getNews);

module.exports = router;
