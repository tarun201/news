var db=require('../db/index');
var news_category = function(){};

var sql="select * from updates as news where category=? and is_deleted=0 and image!='null' order by date desc limit 10";

news_category.getNews=function(category,cb){
    db.getconn(function(err,conn){
        conn.query(sql,[category],function(err,data){
            cb(err,data);
        });
    });
};

module.exports=news_category;