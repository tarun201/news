var db=require('../db/index');
var lc=function(){};

var sql="select * from updates where language=? and category=?";

lc.getLC = function(lang,category,cb){
    db.getconn(function(err,conn){
        conn.query("select * from updates where image!='' and is_deleted=0 and language='"+lang +"' and chash= '"+category +"' order by date desc limit 10;",function(err,result){
            cb(err,result);
        });
    });
};

module.exports=lc;
