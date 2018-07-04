var category_catController = function(){};
var category_catModel = require('../model/category_category.js');

category_catController.getCategories = function(req,res){
    var category=req.params.category
	category_catModel.getCategories(category,function(err,data){
        if(err)
            console.log(err)
        else
		res.json(data);
	});
};

module.exports = category_catController;
