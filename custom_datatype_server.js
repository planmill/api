const r2j = require("ramldt2jsonschema");
const join = require("path").join;
const fs = require("fs");
const express = require("express");
const app = express();

const ramlEndpoint = ".raml";
const jsonEndpoint = ".json";
const indexSubDir = "api_docs";

// serve files from the public directory
app.use(express.static(indexSubDir));

// start the express web server listening on 3000
app.listen(3000, () => {
  console.log("listening on 3000");
});

// serve the homepage
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/download/:type", async (req, res) => {
  let type = req.params.type,
    filePath = join(__dirname + "/api_docs/", type + ramlEndpoint),
    jsonfilePath = join(__dirname, indexSubDir + "/" + type + jsonEndpoint),
    ramlData = fs.readFileSync(filePath).toString(),
    schema;

  schema = await r2j.dt2js(ramlData, type);
  fs.writeFile(jsonfilePath, JSON.stringify(schema, null, 2), function (err) {
    if (err) {
      return console.log(err);
    }
    res.download(jsonfilePath, type + jsonEndpoint);
  });
  //res.sendStatus(201);
});
