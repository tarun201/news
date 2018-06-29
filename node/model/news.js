var db = require('../db/index');
var news=function(){};

var sql="select id,title,language,link,date_format(date,'%D %M, %Y') as day,date_format(date,'%H:%i') as time,image,category from updates where is_deleted=0 and image!='null' order by date desc limit 10 ";

news.getNews=function(cb){
    db.getconn(function(err,conn){
        conn.query(sql,function(err,data){
            cb(err,data);
        });
    });
};

module.exports=news;