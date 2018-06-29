var db=require('../db/index');
var news_lang = function(){};

var sql="select date_format(date,'%D %M, %Y') as day,date_format(date,'%H:%i') as time,id,title,link,image,category from updates where language=? and is_deleted=0 and image!='null' order by date desc limit 10";

news_lang.getNews=function(lang,cb){
    db.getconn(function(err,conn){
        conn.query(sql,[lang],function(err,data){
            cb(err,data);
        });
    });
};

module.exports=news_lang;