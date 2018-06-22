var db=require('../db/index');
var lo=function(){};

var sql="select * from updates limit ? offset ?";

lo.getLO = function(limit,offset,cb){
    db.getconn(function(err,conn){
        conn.query("select * from updates limit "+limit +"  offset "+offset +";",function(err,result){
            cb(err,result);
        });
    });
};

module.exports=lo;