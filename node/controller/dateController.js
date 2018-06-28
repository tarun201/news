var dateController=function(){};
var dateModel=require('../model/date.js');


dateController.getDates = function(req,res){
    dateModel.getDates(function(err,data){
        res.json(data);
    });
};

module.exports=dateController;