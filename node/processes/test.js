var express = require('express');
var mysql= require ("mysql");
var app = express();
var url = require('url');

url="http://feedproxy.google.com/~r/ndtvmovies-latest/~3/18kdeN6yOsE/farhan-akhtars-short-film-on-vidya-b"

const scrape = require('scrape-metadata')
scrape(url, (err, meta) => {
    if(err)
    console.log("soething")
    else
  console.log(meta)
})
