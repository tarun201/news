var request = require('request');
const scrape = require('scrape-metadata');
var mysql = require("mysql");
var each = require('sync-each');

var urlfeed = new Array();

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "justdial",
	database: "project"
})

ex();

function ex() {
	var sql = "select link,id from updates where is_deleted=0 and language='kn' order by date desc";
	con.query(sql, function (err, result) {
		if (err) throw err;
		urlfeed = result;


		each(urlfeed, function (urlfeed, next) {
			request(urlfeed.link, function (error, response, body) {
				//if there is an error in requesting url
				if (error) {
					console.log('error in request; link-ID:', urlfeed.id); // Print the error if one occurred
					next();
				}
				else {
					if (response.statusCode == 200) {
						scrape(urlfeed.link, (err, meta) => {
							// if there is an error in scraping meta
							if (err) {
								console.log('error in scraping; link-ID:', urlfeed.id); // Print the error if one occurred
								sql2 = "update updates set is_deleted=1 where id=?"
								con.query(sql2, [urlfeed.id], function (err, data) {
									//if error in query
									if (err) {
										console.log("Table is_delete update error for ID\n", urlfeed.id);
									}
								})
								next();
							}
							else {
								if (meta.ogImage == undefined || meta.ogImage == null) {
									sql2 = "update updates set is_deleted=1 where id=?"
									con.query(sql2, [urlfeed.id], function (err, data) {
										//if error in query
										if (err) {
											console.log("Table is_delete update error for ID\n", urlfeed.id);
										}
									})
									next();
								}
								else {

									sql2 = "update updates set image=? where id=?"
									con.query(sql2, [meta.ogImage, urlfeed.id], function (err, data) {
										//if error in query
										if (err) {
											console.log("Table image update error for ID\n", urlfeed.id);
										}
										else {
											console.log('Successfull; ID-', urlfeed.id);
										}
									})
									next();
								}
							}
						})
					}
					//if the status-response is other than 200
					else {
						console.log('statusCode:', response.statusCode, 'ID-', urlfeed.id); // Print the response status code if a response was received
						sql2 = "update updates set is_deleted=1 where id=?"
						con.query(sql2, [urlfeed.id], function (err, data) {
							//if error in query
							if (err) {
								console.log("Table is_delete update error for ID\n", urlfeed.id);
							}
						})
						next();
					}
				}
			});
		},function(){
		
			setTimeout(function(){
				ex();
			},10000);
		})


	})
}
