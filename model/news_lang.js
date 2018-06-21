var db=require('../db/index');
var news_lang = function(){};

var sql="select * from updates where language=?";

news_lang.getNews=function(lang,cb){
    db.getconn(function(err,conn){
        conn.query(sql,[lang],function(err,data){
            cb(err,data);
        });
    });
};

module.exports=news_lang;