# api
PlanMill REST API documentation and issues

Add/Edit API Documentation
API documentation project is located on Github at https://github.com/planmill/api

Currently we are running at https://planmill.netlify.app/ 

To Manage Site use the link https://app.netlify.com/

You may install locally or to Netlify in browser, or to netlify via command line. All three
installation options are presented here in sections 1) 2) and 3), pick one most suitable for you. 
Section 4)is about generating html files only, use it if you do not need a complete 
installation and for testing html. 
 
I) Local installation guide using node

1. Install node.js http://nodejs.org/, if not yet installed.
2. Download the project from Github in a folder on your computer
3. Navigate to root folder in the downloaded folder from Github.
4. Before running locally uncomment the below lines in /server.js:

     /* start the express web server listening on 3020
     app.listen(3020, () => {
       console.log("listening on 3020");
     });*/ 

5. In the root directory Run Command "npm run build"
6. Make sure index.html inside "api_docs" folder gets generated along with the new schema json files
7. Go to http://localhost:3020 to see site. 

II) Netlify installation guide in deploying from git branch directly. 

1. Go to https://app.netlify.com/start. 
2. Choose GitHub by clicking button GitHub. 
3. Choose Repository "Planmill" from drop down menu. 
4. Click link "Configure the Netlify app in GitHub"
5. Choose Repository "Planmill" from the list by Clicking "PlanMill". 
6. Login to your GitHub account if asked. 
7. Choose option Only select repositories from radio button. 
8. Select repository planmill/api. 
9. Choose update access. 
10. Choose api
11. In field "Owner", Choose owner suitable for your deployment needs. In field "Branch to deploy", choose branch 
you want to deploy. Usually this is master, but if you need to test a development branch, choose that branch. 
12. Leave "build command" field as it is, and put "." to Publish directory. Click "Deploy site". 

III) Netlify installation guide in command line from local code

1. Install node.js http://nodejs.org/, if not yet installed.
2. Run command "npm install netlify-cli -g -force" as administrator
3. Use command "netlify init" to initialize your site
4. Goto the root folder of the api doc and use "npm run deploy" to deploy the documentation in public site

IV) Generating and investigating ramlt2html output html document:

Following steps include the validation of RAML file before generating HTML doc from it:

Navigate to planmill1_5.raml file. This file uses RESTful API Modeling Language (RAML). It makes it easy to manage the whole API lifecycle from design to sharing.
Edit the file and save changes.
Add or edit schema and sample files.

Run following command in command prompt in api_docs subdirectory: raml2html -i planmill1_5.raml -o index.html. It will generate the HTML file in the same folder where RAML file is present.
Open the index.html in browser and you should see the API document (or parsing errors, if any).

V) API Testing

1. Check out git master branch https://github.com/planmill/api-integration-tests
2. Open the project in Intelij Idea
3. Open path.properties from script folder (Not from template folder)
4. Make sure to change the "instance" property to point to the pmserver03 instance you would like to test against
5. Make sure to change "schema_local_path" property to point to the netlify deployed developement instance you would like to test against
6 Go to the test class for example API15ProjectIT.java and Click of the "Run Test" arrow in class level or method level.

VI) Adding API tests for sample files

Check examples E_insertPortfolioSample()  and  F_updatePortfoliowithSample() in Portfolio API test module API15PortfolioIT.java of the API tests. 


Documentation for formatting 

https://github.github.com/gfm/#tables-extension-