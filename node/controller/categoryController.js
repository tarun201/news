
var categoryController = function(){};
var categoryModel = require('../model/category.js');

categoryController.getCategories = function(req,res){
	categoryModel.getCategories(function(err,data){
		res.json(data);
	});
};

module.exports = categoryController;
