# api
PlanMill REST API documentation and issues

Add/Edit API Documentation
API documentation project is located on Github at https://github.com/planmill/api

You may install locally or to Netlify in www, or to netlify via command line. 

1) Local installation guide

1. Download the project from Github in a folder on your computer
2. Navigate to root folder in the downloaded folder from Github.
3. Install node.js http://nodejs.org/.
4. Install raml2html: npm i -g https://github.com/planmill/raml2html#develop
5.  Before running locally uncomment the below lines in /server.js:
/* start the express web server listening on 3020
app.listen(3020, () => {
  console.log("listening on 3020");
});*/ 
6. In the root directory Run Command "npm run build"
7. Make sure index.html inside "api_docs" folder gets generated along with the new schema json files
8. In command prompt, "node server.js"
9. Go to http://localhost:3020 to see site. 

2) Netlify installation guide in www. 

1. Connect the github repository to your netlify account. 
2. Go to https://app.netlify.com/start. 
3. Choose GitHub. 
4. Choose Repository "Planmill". 
5. Choose Configure your netlify app in github
6.  Choose Planmill
7. Choose Only select repositories. 
8. Select repository planmill/api. 
9. Choose update access. 
10. Choose api
11. Leave "build command" empty, and put "." to Publish directory. press "Deploy site". 

3) Netlify installation guide in command line

1. Run command "npm install netlify-cli -g -force" as administrator
2. Use commain "netlify init" to initialize your site
3. Goto the root folder of the api doc and use "netlify deploy --prod" to deploy the documentation in public site

4) Gemeratomg and investigating ramlt2html output html document:

Generate HTML document
Following steps include the validation of RAML file before generating HTML doc from it:

Navigate to planmill1_5.raml file. This file uses RESTful API Modeling Language (RAML). It makes it easy to manage the whole API lifecycle from design to sharing.
Edit the file and save changes.
Add or edit schema and sample files.

Run following command in command prompt in api_docs subdirectory: raml2html -i planmill1_5.raml -o index.html. It will generate the HTML file in the same folder where RAML file is present.
Open the index.html in browser and you should see the API document (or parsing errors, if any).

Documentation for formatting 

https://github.github.com/gfm/#tables-extension-


Currently we are running at https://planmill.netlify.app/ 

to Manage Site use the link https://app.netlify.com/