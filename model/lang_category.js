var db = require('../db/index');
var lang_category = function () { };

lang_category.getCategories = function (lang, cb) {
	db.getconn(function (err, conn) {
		conn.query("SELECT DISTINCT category as category FROM sources WHERE languages=?",[lang], function (err, result) {
			cb(err, result);
		});
	});
};

module.exports = lang_category;
