const r2j = require("ramldt2jsonschema");
const join = require("path").join;
const fs = require("fs");
const express = require("express");
const app = express();

const ramlEndpoint = ".raml";
const schemaEndpoint = ".schema";
const indexSubDir = "api_docs"

var linkItems = [

  "account_getId",
  "account_post",
  "account_postId",
  "account_getAll"
  
];

// serve files from the public directory
app.use(express.static(indexSubDir));


//start the express web server listening on 3020
/*app.listen(3020, () => {
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
    filePath = join(currentDir, 'planmill1_5' + ramlEndpoint);
    const ramlData = fs.readFileSync(filePath).toString();
		linkItems.forEach(async  (name) => 
		{
			try {
				let schema = await r2j.dt2js(ramlData, name);
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