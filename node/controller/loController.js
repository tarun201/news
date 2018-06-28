var loModel=require('../model/lo');
var loController=function(){};

loController.getLO=function(req,res){
    var limit=req.params.limit;
    var offset=req.params.offset;
    console.log(offset,limit)
    loModel.getLO(limit,offset,function(err,data){
        if(err)
        console.log(err)
        res.json(data);
    });
};

module.exports=loController;