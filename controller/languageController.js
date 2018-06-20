
var languageController = function(){};
var languageModel = require('../model/language.js');

languageController.getLanguages = function(req,res){
	languageModel.getLanguages(function(err,data){
		res.json(data);
	});
};

module.exports = languageController;
