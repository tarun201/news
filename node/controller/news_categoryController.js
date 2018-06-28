var news_categoryController=function(){};
var news_categoryModel=require('../model/news_category');

news_categoryController.getNews=function(req,res){
    var category=req.params.category;
    news_categoryModel.getNews(category,function(err,data){
        if(data.length==0)
            res.json("Invalid/Not Available");
        else
            res.json(data);
    });
};

module.exports=news_categoryController;