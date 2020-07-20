# api
PlanMill REST API documentation and issues

Add/Edit API Documentation
API documentation project is located on Github at https://github.com/planmill/api

Download the project from Github in a folder on your computer
Navigate to planmill1_5.raml file. This file uses RESTful API Modeling Language (RAML). It makes it easy to manage the whole API lifecycle from design to sharing.
Edit the file and save changes.
Add or edit schema and sample files.

Generate HTML document
Following steps include the validation of RAML file before generating HTML doc from it:

Install node.js http://nodejs.org/.
Look for Node js command prompt (search your Windows). It's installed by the Node js.
Run in Node js command prompt: npm i -g https://github.com/planmill/raml2html#develop (fetches raml2html from Node.js npm repository, same idea as Maven central and installs it). More about raml2html.
In Node js command prompt, navigate to api folder in the downloaded folder from Github.
Run following command in Node js command prompt: raml2html -i planmill1_5.raml -o index.html. It will generate the HTML file in the same folder where RAML file is present.
Open the index.html in browser and you should see the API document (or parsing errors, if any).

Documentation for formatting 

https://github.github.com/gfm/#tables-extension-


Netlify Local Installation steps
--------------------------------

1. Run command "npm install netlify-cli -g -force" as administrator
2. Next steps:

  netlify init     Connect or create a Netlify site from current directory
  netlify deploy   Deploy the latest changes to your Netlify site
  
netlify init 

and Next steps:

 Logging into your Netlify account...
 
Note :  Use always up / down keys to select your options

3. Use commain "netlify init" to initialize your site

4. Goto the root folder of the api doc and use "netlify deploy --prod" to deploy the documentation in public site

Currently we are running at https://planmill.netlify.app/ 

to Manage Site use the link https://app.netlify.com/


