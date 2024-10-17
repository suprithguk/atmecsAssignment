// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import { error } from 'cypress/types/jquery'
import './commands'
import { Runnable } from 'mocha'
import cypress = require('cypress')

// Alternatively you can use CommonJS syntax:
// require('./commands')
///<reference types='cypress-xpath' />;
Cypress.on('uncaught:exception', (Error, Runnable) => {
    return false
});
import 'cypress-mochawesome-reporter/register';