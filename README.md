## Test Challenge Framework - Cypress.io

    This Cypress Framework allow us to perform GUI BDD E2E Flow with Web Application.

    More info on: https://docs.cypress.io/

## Installation

    Use the package manager [npm](https://www.npmjs.com/) to install the framework and all the dependencies.

    Under repo directory

    npm install

## Operating System

    | Operating System 	| Flavour 	|
    |------------------	|---------	|
    | Apple            	| Mac OS  	|
    | Linux            	| Ubuntu  	|
    | Others           	| Windows 	|

## Code Structure

**core** folder contains all the core functionalities related to framework

    |-------------------------	|---------------------------------------	|
    | Stroer-Core/Config    	| Environment Config                    	|
    | Stroer-Core/Types     	| Project Types, Cypress Config         	|
    | Stroer-Core/Pages      	| TestPage Utilities                     	|

## Usage

` "lint": "eslint src/stroer/stepDefinitions/**/*.js", "lint:fix": "npm run lint --fix", "cypress:runner": "npx cypress open", "cypress:run": "cypress run --reporter mocha-allure-reporter", "cypress:allure": "allure generate allure-results --clean -o allure-report && allure open", "cypress:allure:clear": "rm -r allure-results/ allure-report cypress/screenshots || true", "cypress:allure:report": "allure generate allure-results --clean -o allure-report", "cypress:allure:history": "mv -f allure-report/history allure-results/history && rm -r allure-report || true"`
**reports** folder contains files related to allure reporting(Only gets created after you run the command to generate report).

    `allure-results`

## Run specific Spec file

    `bash
        npm run cypress:run -- --spec "cypress/e2e/1-getting-started/todo.cy.js"
    `

## Available browsers to be used with "BROWSER"

    | Supported Browser 	|
    |-------------------	|
    | Chrome            	|
    | FireFox           	|
    | Electron          	|
    | Chromium          	|

## Generating report

    `bash
        "cypress:allure": "allure generate allure-results --clean -o allure-report && allure open"


## Execute All Testcase from test source folder

        npm run cypress:allure
    `

## Authors

    Saravanan Rajamanickam

## License

    MIT
