const r2j = require("ramldt2jsonschema");
const join = require("path").join;
const fs = require("fs");
const http = require('http')
const express = require("express");
const app = express();
const download = require("downloadjs")

const ramlEndpoint = ".raml";
const jsonEndpoint = ".json";
const indexSubDir = "api"

// serve files from the public directory
app.use(express.static(indexSubDir));

// start the express web server listening on 3020
app.listen(3020, () => {
  console.log("listening on 3020");
});

// serve the homepage
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/download/:type", async (req, res) => {
const click = { clickTime: new Date() };
  console.log(click);

  let type = req.params.type,
      filePath = join(__dirname, type + ramlEndpoint),
      jsonfilePath = join(__dirname, indexSubDir + "/" + type + jsonEndpoint),
      ramlData = fs.readFileSync(filePath).toString(),
      schema;
    
  console.log(type)
  schema = await r2j.dt2js(ramlData, type);

  fs.writeFile(jsonfilePath, JSON.stringify(schema, null, 2), function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
    res.download(jsonfilePath,type+jsonEndpoint);
 
  });
  //res.sendStatus(201);
});
