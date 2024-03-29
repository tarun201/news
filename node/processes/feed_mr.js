const request = require("request");
const FeedParser = require("feedparser");
var mysql = require("mysql");
var each = require('sync-each');
var dateFormat = require('dateformat');

let urlTestFeed = new Array();
var date;
var regx = /(<([^>]+)>)/ig;

cleanCodes1 = function (s) {

	var translate_re = /&(nbsp|amp|quot|lt|gt|#38|#038|#39|#039|apos|thinsp);/g;

	var translate = { "nbsp": " ", "amp": "&", "quot": "\"", "lt": "<", "gt": ">", "#38": "&", "#038": "&", "#39": "'", "#039": "'", "apos": "'", "thinsp": " " };

	return (s.replace(translate_re, function (match, entity) {

		return translate[entity];

	}));

};



cleanCodes2 = function (s) {

	var translate_re = /(nbsp|amp|quot|lt|gt|#38|#038|#39|#039|apos);/g;

	var translate = { "nbsp": " ", "amp": "&", "quot": "\"", "lt": "<", "gt": ">", "#38": "&", "#038": "&", "#39": "'", "#039": "'", "apos": "'" };

	return (s.replace(translate_re, function (match, entity) {

		return translate[entity];

	}));

};

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "justdial",
	database: "project"
})


var sql = "select * from sources where languages='mr'";
con.query(sql, function (err, result) {
	if (err) throw err;
	urlTestFeed = result;
	if (urlTestFeed.length > 0) {
		len = urlTestFeed.length
		ex();
	}

})




function getFeed(urlfeed, next, callback) {

	var req = request(urlfeed);
	var feedparser = new FeedParser();
	var feedItems = new Array();
	req.on("response", function (response) {
		var stream = this;
		if (response.statusCode == 200) {
			stream.pipe(feedparser);
		}
		else {
			callback(next)
		}
	});
	req.on("error", function (err) {
		console.log("getFeed: err.message == " + err.message);
	});
	feedparser.on("readable", function () {
		try {
			var item = this.read(), flnew;
			if (item !== null) { //2/9/17 by DW
				feedItems.push(item);
			}
		}
		catch (err) {
			console.log("getFeed: err.message == " + err.message);
		}
	});
	feedparser.on("end", function () {
		callback(undefined, feedItems);
	});
	feedparser.on("error", function (err) {
		console.log("getFeed: err.message == " + err.message);
		callback(err);
	});
}

function ex() {
	each(urlTestFeed, function (urlTestFeed, next1) {

		getFeed(urlTestFeed, next1, function (err, feedItems) {

			if (!err) {
				each(feedItems, function (feedItems, next) {

					//Clean the Description and title
					if (feedItems.description != null) {
						feedItems.description = cleanCodes2(cleanCodes1(feedItems.description.replace(regx, "")));
					}
					if (feedItems.title != null) {
						feedItems.title = cleanCodes2(cleanCodes1(feedItems.title.replace(regx, "")));
					}

					var sql = "insert ignore into updates(title,date,description,link,language,category,chash,source_id) values(?,?,?,?,?,?,?,?)";


					date = new Date(feedItems.date);
					if (date == "Invalid Date")
						date = new Date();
					con.query(sql, [feedItems.title, dateFormat(date, "yyyy-mm-dd HH:MM:ss"), feedItems.description, feedItems.link, urlTestFeed.languages, urlTestFeed.category, urlTestFeed.chash, urlTestFeed.id], function (err, result) {
						if (err) {
							console.log(err);
							console.log("next feed\n")
							next()
						}
						else {
							// console.log("Inserted for URL =" + urlTestFeed.url + " ID="+urlTestFeed.id+"\n")
							next()
						}
					})
				},
					function () {
						// console.log("Next link\n")
						next1();
					});
			}
			else if (err || false) {
				console.log("Next link\n")
				next1();
			}

		});
	}, function () {

		setTimeout(function () {
			ex();
		}, 3600000);
	})
}

