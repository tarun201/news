var sourceModel=require('../model/source');
var sourceController=function(){};

sourceController.getSources=function(req,res){
    sourceModel.getSources(function(err,data){
        res.json(data);
    })
}

module.exports=sourceController;