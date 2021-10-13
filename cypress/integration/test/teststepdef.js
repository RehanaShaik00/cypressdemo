import { Given } from "cypress-cucumber-preprocessor/steps";

Given('i launch the browser and perform some actions', ()=> {
    cy.visit('https://blog.testproject.io/2020/06/17/selenium-javascript-automation-testing-tutorial-for-beginners/')
})