var db = require('../db/index');
var category = function(){};

category.getCategories = function(cb){
	db.getconn(function(err,conn){
		conn.query("SELECT DISTINCT category as category,chash FROM sources",function(err,result){
		cb(err,result);
	});
	});
};

module.exports = category;
