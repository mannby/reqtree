#!/usr/bin/env node
/*
  mapme is a node tool designed to graphically display the dependencies of a file in your web application.
  
  requirements:
  minimist (https://www.npmjs.org/package/minimist)
  
  by: Hareesh Nagaraj & Dheeraj Manjunath
*/
var parseArgs = require('minimist')          //Using the minimist node package 
var fs = require('fs')                       //Requiring the basic file system
var fileParser = require('./fileParser.js')  //fileParser is the class used to parse the page for dependencies
var argArray = parseArgs(process.argv.slice(2))  //Grabbing the command line arguments
var argv = argArray['_']

var map = {}
var parser = new fileParser(argv)
parser.fileContainer = map      
var result = parser.parse(function(result){
   //createPage(result);
   console.log(result)
})

function createPage(result){
  var pageCreator = require('./pageCreator.js')  //pageCreator is the class that generates the D3 page
  var page = new pageCreator(result)
  page.create()
}