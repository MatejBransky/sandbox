context('Example', () => {
  it('works!', () => {
    cy.visit('/');
    cy.myLog('foobar');
    cy.findByRole('button', { name: /count is/ })
      .click()
      .click();
  });
});
