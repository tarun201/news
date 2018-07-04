var db = require('../db/index');
var category_category = function(){};

var sql="select distinct category from sources where languages=(select distinct language from updates where category=? )";

category_category.getCategories = function(category,cb){
	db.getconn(function(err,conn){
		conn.query(sql,[category],function(err,result){
		cb(err,result);
	});
	});
};

module.exports = category_category;
