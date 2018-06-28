var lang_categoryModel = require('../model/lang_category');
var lang_categoryController=function(){};

lang_categoryController.getCategories = function(req,res){
    var lang=req.params.lang;
    lang_categoryModel.getCategories(lang,function(err,data){
        if(data.length==0){
            res.json("Invalid/Not available");
        }else{
            res.json(data);
        }
    });
};

module.exports=lang_categoryController;