// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

export {};

declare global {
  namespace Cypress {
    interface Chainable {
      myLog: typeof myLog;
    }
  }
}

Cypress.Commands.add('myLog', myLog);

function myLog(input: string) {
  Cypress.log({
    name: 'myLog',
    // shorter name for the Command Log
    displayName: 'myLog :)',
    message: `log input is "${input}"`,
    consoleProps: () => {
      // return an object which will
      // print to dev tools console on click
      return { input };
    },
  });
}
