var news_langModel=require('../model/news_lang');
var news_langController=function(){};

news_langController.getNews=function(req,res){
    var lang=req.params.lang;
    news_langModel.getNews(lang,function(err,data){
        if(data.length==0)
            res.json("Invalid/Not Available");
        else
            res.json(data);
    });
};

module.exports=news_langController;