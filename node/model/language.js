var db = require('../db/index');
var language = function(){};


language.getLangs=function(cb){
    db.getconn(function(err,conn){
        conn.query("select distinct languages from sources",function(err,result){
            cb(err,result);
        })
    })
}

module.exports = language;