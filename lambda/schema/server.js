const r2j = require("ramldt2jsonschema");
const join = require("path").join;
const fs = require("fs");
const express = require("express");
const app = express();

const ramlEndpoint = ".raml";
const schemaEndpoint = ".schema";
const indexSubDir = "api_docs"

var linkItems = [
  "absence1_5:array",
  "absence_single1_5:single",
  "account1_5:array",
  "account_single1_5:single"
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
const currentDir = __dirname;

const main = async function () {
	let filePath;
	let schema;
	
		linkItems.forEach(async  (elem) => 
		{
			try {
				var name = elem.split(":")
				filePath = join(currentDir, name[0] + ramlEndpoint);
				
				let ramlData = fs.readFileSync(filePath).toString();
				let schema = await r2j.dt2js(ramlData, name[0].replace('1_5',''));
				let schemaStr = JSON.stringify(schema, null, 2);
				if(name[1] === 'array') {
					var replaceString = '"$ref": "#/definitions/'+name[0].replace('1_5','')+'"';
					schemaStr = schemaStr.replace(replaceString, '"oneOf": [{"type": "array","items": { '+replaceString+' }},{'+replaceString+'}  ]');
				}
				let jsonfilePath = join(currentDir, '../../api_docs/' + name[0]+ schemaEndpoint);
				fs.writeFile(jsonfilePath, schemaStr, function (err, data) {});
  			  } catch (e) {
			  console.log(e);
			  }
		})
		return;
    };
	
main();