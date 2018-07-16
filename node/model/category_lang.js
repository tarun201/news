var db = require('../db/index');
var category_lang = function(){};

category_lang.getCategories = function(lang,cb){
	db.getconn(function(err,conn){
		conn.query("SELECT DISTINCT category as category,chash FROM sources WHERE category!='' and languages=?",[lang],function(err,result){
		cb(err,result);
	});
	});
};

module.exports = category_lang;
