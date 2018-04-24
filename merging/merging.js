
var fs = require("fs");

const fileOne = require("./people1.json");
const fileTwo = require("./people2.json");
const newFile = 'newFile.txt';

function myFunction(fileOne, fileTwo) {
	fs.readFile(fileOne, 'utf-8', function(err, data1) {
		if (err) throw err;
		var firstFile = JSON.parse(data1);

		fs.readFile(fileTwo, 'utf-8', function(err, data2) {
  		if (err) throw err;
  		var secondFile = JSON.parse(data2);
  		var merging = firstFile.concat(secondFile);
  		console.log(merging.sort());

		fs.writeFile('./newFile.txt', merging.sort(), "utf-8", function(err) {
			if (err) throw err;  		

myFunction("./people1.json", "./people2.json");

