
Precquisites

Node.js and npm should be installed, including fs and path-packages. 

How to run:

-install following packages to directory:

npm install ramldt2jsonschema
npm install express
npm install downloadjs

Optional: 

you may also try to install these with -g option to have packages available everywhere,
but this seems not to work with ramldt2jsonschema for some reason:

npm install -g ramldt2jsonschema
npm install -g express
npm install -g downloadjs


-command: node custom_datatype_server.js
-open localhost:8080 in browser
-click "Download JSON" -button(s) to generate json files from raml available in server. 
