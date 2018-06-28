var lcModel=require('../model/lc');
var lcController=function(){};

lcController.getLC=function(req,res){
    var lang=req.params.lang;
    var category=req.params.category;
    lcModel.getLC(lang,category,function(err,data){
        if(err)
            console.log(err)
        res.json(data);
    });
};

module.exports=lcController;