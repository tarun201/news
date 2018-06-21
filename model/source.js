var db = require('../db/index');
var source=function(){};

var sql="select url from sources";

source.getSources=function(cb){
    db.getconn(function(err,conn){
        conn.query(sql,function(err,result){
            cb(err,result);
        });
    });
};

module.exports=source;