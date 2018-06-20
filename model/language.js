var db = require('../db/index');
var languages = function(){};

languages.getLanguages = function(cb){
	db.getconn(function(err,conn){
		conn.query("SELECT DISTINCT category as category FROM sources WHERE languages='en'",function(err,result){
			console.log(result);
		cb(err,result);
	});
	});
};

module.exports = languages;
