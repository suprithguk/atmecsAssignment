# atmecsAssignment
This is a project created solely as an assessment for organization ATMECS. This doesn't use any proprietary softwares.

### Author
Suprith Gangawar <suprithguk@gmail.com>

### Pre Requisites
npm
cypress
typescript
cypress-mochawesome-reporter

### Installation and Usage
Clone the repo: 
$ git clone https://github.com/suprithguk/atmecsAssignment
$ cd atmecsAssignment

$ npm i
$ npm install typescript --save-dev
$ npm install cypress --save-dev
$ npm install cypress-mochawesome-reporter --save-dev

To run spec files through cypress UI:
$ npx cypress open

To run spec files without the cypress UI and directly through command line:
$ npx cypress run --spec cypress/e2e/amazon/search_specific.cy.ts
$ npx cypress run --spec cypress/e2e/amazon/search_strategic.cy.ts

### Important Files/Folders
package.json - Readable information about the project, author, dependencies etc,.
cypress.config.ts - To add configurations if any
Jenkinsfile - To import and run the test cases in Jenkins CI/CD platform. Its just a sample file and not tested. Usually this becomes the entry point to the project.
support/e2e.ts - To import all required global configuration
support/commands.ts - Reusable commands to keep test cases short and readable
screenshots/ - To store screenshots taken during the testing
reports/html/index.html - HTML report to view the status in browser. This is created by cypress-mochawesome-reporter post every run. Overwrites the previous report.
pages/AmazonPage.ts - Contains AmazonPage class to define the actions to interact with the Amazon ecommerce UI.
fixtures/ - Contains files in .csv or .json format to import as test data to later use in your test cases.
fixtures/products.json - Contains brand, product and category information to search and assert in the browser
e2e/amazon/search_specific.cy.ts - Simple and straignt forward file to run a single test case
e2e/amazon/search_strategic.cy.ts - Longer way to achieve the same motive of searching the product in amazon, by using the OOP concepts in typescript
downloads/ - Location to store any downloaded data during your testing

### Reporting
html reports are generated when you run the spec files through command line at:
atmecsAssignment/cypress/reports/html/index.html