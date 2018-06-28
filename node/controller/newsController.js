var newsController=function(){};
var newsModel=require('../model/news');

newsController.getNews=function(req,res){
    newsModel.getNews(function(err,data){
        if(err)
            console.log(err);
        else
            res.json(data);
    });
};

module.exports=newsController