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
  "absence1_5:array:noAdditionalProperties",
  "absence_single1_5:single:noAdditionalProperties",
  "account1_5:array:noAdditionalProperties",
  "account_single1_5:single:noAdditionalProperties"
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
				var name = elem.split(":");
				filePath = join(currentDir, name[0] + ramlEndpoint);
				let ramlData = fs.readFileSync(filePath).toString();
				let isArrayType = (name[1] === 'array');
				let typeName = name[0].replace('1_5','');
				let additionalProperties = (name[2] === 'noAdditionalProperties'? false : true);
				let schema = await r2j.dt2js(ramlData, typeName, {addType: true, isArray: isArrayType, additionalProperties :additionalProperties});
				let schemaStr = JSON.stringify(schema, null, 2);
				
				let jsonfilePath = join(currentDir, name[0]+ schemaEndpoint);
				fs.writeFile(jsonfilePath, schemaStr, function (err, data) {});
  			  } catch (e) {
				console.log(e);
			  }
		})
		return;
    };
	
main();