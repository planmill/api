const r2j = require("ramldt2jsonschema");
const join = require("path").join;
const fs = require("fs");
const http = require('http')
const express = require("express");
const app = express();

const ramlEndpoint = ".raml";
const jsonEndpoint = ".json";
const indexSubDir = "api_docs"
var idSplit = ":";

var linkItems = [
  "absence",
  "absence_single",
  "account1_5",
  "account_single1_5"
];

// serve files from the public directory
app.use(express.static(indexSubDir));

/*
//start the express web server listening on 3020
app.listen(3020, () => {
  console.log("listening on 3020");
});*/

// serve the homepage
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//const currentDir = process.env.LAMBDA_TASK_ROOT;
const currentDir = __dirname;

const main = async function () {
	let filePath;
	let schema;
	let jsonfilePath;
	
		linkItems.forEach(async  (elem) => 
		{
			try {
				console.log(elem + ramlEndpoint);
				filePath = join(currentDir, elem + ramlEndpoint);
				console.log(filePath);
				
				let ramlData = fs.readFileSync(filePath).toString();
				
				console.log(ramlData);
				
				let schema = await r2j.dt2js(ramlData, elem);
				
				console.log(JSON.stringify(schema, null, 2));
				let jsonfilePath = join(currentDir, '../../api_docs/' + elem + jsonEndpoint);
				fs.writeFile(jsonfilePath, JSON.stringify(schema, null, 2), function (err, data) {});
  			  } catch (e) {
			  console.log(e);
			  }
		})
		return;
    };
	
main();