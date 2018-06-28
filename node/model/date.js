var db=require('../db/index')
var dates=function(){};

var sql="select distinct date_format(date,'%y-%m-%d') as date from updates";

dates.getDates= function(cb){
    db.getconn(function(err,conn){
        conn.query(sql,function(err,result){
            cb(err,result);
        });
    });
};

module.exports=dates;