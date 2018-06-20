
var languageController =function(){};
var langModel = require('../model/language.js');

languageController.getLangs = function(req,res){
    langModel.getLangs(function(err,data){
        res.json(data);
    })
};

module.exports = languageController;