var db=require('../db/index');
var lc=function(){};

var sql="select * from updates where language=? and category=?";

lc.getLC = function(lang,category,cb){
    db.getconn(function(err,conn){
        conn.query("select * from updates where language='"+lang +"' and category= '"+category +"';",function(err,result){
            cb(err,result);
        });
    });
};

module.exports=lc;