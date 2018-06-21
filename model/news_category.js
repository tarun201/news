var db=require('../db/index');
var news_category = function(){};

var sql="select * from updates where category=?";

news_category.getNews=function(category,cb){
    db.getconn(function(err,conn){
        conn.query(sql,[category],function(err,data){
            cb(err,data);
        });
    });
};

module.exports=news_category;