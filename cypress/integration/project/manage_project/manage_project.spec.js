import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

const USER_NAME = 'kibetvicky.j@gmail.com';
const PASSWORD = 'Qwerty@123';
const PROJECT_NAME = 'test';
const DESCRIPTION = 'test2';




Given('The portal login page', () => {
    cy.visit("/")
    cy.get(".Login").should("be.visible");
});

When('I log in as a user', () => {
  cy.get('.action-email')
    .type(USER_NAME)
  cy.get('.action-password')
    .type(PASSWORD)
});

Then('I see the home page', () => {
  cy.get(".Home").should("be.visible");
});

Given('The project dashboard', () => {
  cy.get('@sidebar')
    .find('[data-cy="sidebar-projects"]')
    .click();
});

When('I add a new project', () => {
    cy.get('@topbar')
      .find('[data-cy="new-project"]')
      .click();
});

And('I fill in the project details',()=>{
    cy.get('name-field')
      .type(PROJECT_NAME)
    cy.get('description-field')
      .type(DESCRIPTION)
      .find('[data-cy="add-project"]')
      .click();
})

Then ('I see the project was successfully created',()=>{
  cy.get(".test").should("be.visible");

})