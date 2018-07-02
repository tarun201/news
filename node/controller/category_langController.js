var category_langController = function(){};
var category_langModel = require('../model/category_lang.js');

category_langController.getCategories = function(req,res){
    var lang=req.params.lang
	category_langModel.getCategories(lang,function(err,data){
		res.json(data);
	});
};

module.exports = category_langController;
