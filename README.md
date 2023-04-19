# tariffSelection
 select the best available tariff based on price
 
**Pre requisites**
Node js -16.13.0 or any latest version
Visual Studio IDE  , to view the files

**Running test:**
 
 Install dependencies by running npm i
 
 Execute the below command
 
 npm run test
 #Cypress window will open, select the test case which need to be executed

**TestCases**

1. Testcase to Verify the DSL calculator
2. Testcase to load multiple tariff result pages
3. Testcase to verify offer details for a selected tariff


**Folder structure**

Cypress/integration-: This consist of the spec file for each testcase

cypress/pagefactory-: All the resuable function are created under this

cypress/pageobject-: The xpath are captured and placed

cypress/testdata-: The testdata which is passed to the spec file, the data passed in json format

**Approaches and automation concept used**

1. Centralized approach for reusability like centralized URL
2. Assertions has been placed for validation in seperate file
3. Page object model approach used
4. Comments mentioned for better understanding
5. Maintainable and re-usable code

Choosing tech stack: Cypress has been used. Also it can very easily get synced with cucumber syntax

