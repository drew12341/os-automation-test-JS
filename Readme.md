## Introduction

This repository is mainly for JavaScript automated testing of OpenSpace. The technology stack used is Seleniumjs and Cucumber. The purpose is to simulate various operations when users browse the web, and it is expected that the functions of the web page can operate normally and give back a positive user experience to the user. Cucumber is a BDD test framework. The main purpose of using Cucumber is to make the test content simple and easy to understand, so that people in different positions on the team can communicate and improve the test.

## Architecture

![Product Name Screen Shot](assets/architecture.png)

data: Folder to store elements and test data e.g user account and password.  
elementXpath: File to store elements by Xpath.  
testData: File to store input data for testing.  
steps: Folder to store .feature files.  
function: File to store reusable functions

## Test Report

![Product Name Screen Shot](assets/report.png)

## Test Cases

DPS-537:Verifying support and profile menu in top navigation.  
DPS-591:Verifying user can post image and text into discussion panel.  
DPS-592:Verifying discussion likes, dislikes, replies and url content.  
DPS-593:Verifying the number of discussion posts.  
DPS-638:Verifying megadrop menu options.  
DPS-639:Verifying megadrop menu and subtopic navigation.  
DPS-640:Verifying megadrop menu and activities.  
DPS-664:Verifying trainer tooltip in discussion panel.

## Prerequisites

Nodejs: https://nodejs.org/en/download/

## Installation

Selenium: npm install selenium-webdriver --save-dev  
Cucumberjs: npm install cucumber-js --save-dev  
Cucumber report: npm install cucumber-html-reporter --save-dev

## Test Executing:

Test a single test case: ./node_modules/.bin/cucumber-js ./features/testFile.feature -f json:report/cucumber_report.json

Test all test cases: npm run all  

Show test report: npm run report  

## Resources

Selenium Docs:
https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/ie_exports_Driver.html#findElement

Selenium Webdriver:
https://www.selenium.dev/documentation/

Gherkin Syntax:
https://cucumber.io/docs/gherkin/reference/

Cucumber Docs:
https://github.com/cucumber/cucumber-js

Cucumber Tutorial:
https://cucumber.io/docs/guides/10-minute-tutorial/

Cucumber reporting:
https://www.npmjs.com/package/cucumber-html-reporter

## Contact

Kyrie Wen - kyrie.wen@opencolleges.edu.au
