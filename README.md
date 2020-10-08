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

1. Connect the github repository to your netlify account. 
2. Go to https://app.netlify.com/start. 
3. Choose GitHub by clicking button GitHub. 
4. Choose Repository "Planmill" from drop down menu. 
5. Click link "Configure the Netlify app in GitHub"
6. Choose Repository "Planmill" from the list by Clicking "PlanMill". 
7. Login to your GitHub account if asked. 
7. Choose option Only select repositories from radio button. 
8. Select repository planmill/api. 
9. Choose update access. 
10. Choose api
11. In field "Owner", Choose owner suitable for your deployment needs. In field "Branch to deploye", choose branch 
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

Documentation for formatting 

https://github.github.com/gfm/#tables-extension-

