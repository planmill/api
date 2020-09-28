const r2j = require("ramldt2jsonschema");
const join = require("path").join;
const fs = require("fs");
const express = require("express");
const app = express();

const ramlEndpoint = ".raml";
const schemaEndpoint = ".schema";
const indexSubDir = "api_docs"

//options are passed from linkItems... 
// first param is a type  name
// second parameter is array or single schema object
// third parameter is option to pass additionalProperties true or false
var linkItems = [
  "account1_5",
  "accountsingle1_5"
];

// serve files from the public directory
app.use(express.static(indexSubDir));

/*
//start the express web server listening on 3020
app.listen(3020, () => {
  console.log("listening on 3020");
});
*/
// serve the homepage
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//const currentDir = process.env.LAMBDA_TASK_ROOT;
const currentDir = __dirname +'/api_docs/' ;

const main = async function () {
	let filePath;
	let schema;
	
		linkItems.forEach(async  (elem) => 
		{
			try {
				var name = elem;
				filePath = join(currentDir, 'planmill1_5' + ramlEndpoint);
				let ramlData = fs.readFileSync(filePath).toString();
				let schema = await r2j.dt2js(ramlData, name.replace('1_5', ''));
				let schemaStr = JSON.stringify(schema, null, 2);
				
				let jsonfilePath = join(currentDir, name+ schemaEndpoint);
				fs.writeFile(jsonfilePath, schemaStr, function (err, data) {});
  			  } catch (e) {
				console.log(e);
			  }
		})
		return;
    };
	
main();