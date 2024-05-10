let config = Cypress.config();
describe('Bike Configurator', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll')
      .should('be.visible')
      .click({ multiple: true });
  });

  //Select a language and country

  it('Select language', function () {
    cy.get('#block-multiswitcher-2')
      .should('be.visible')
      .click();

    cy.get('#edit-content--2 > .language-countries-options-container > [data-country="nl"][data-language="nl"]')
      .should('be.visible')
      .click();
  });

  //Select an E-bike

  it('Your Stromer -> ST2s', function () {
    cy.visit(`${config.baseUrl}`+'/nl/configurator?bike=st2s');

    cy.get('#edit-content--2 > .language-countries-options-container > [data-country="nl"][data-language="nl"]')
      .should('be.visible')
      .click();
      
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st2siccom0p5fe.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();

    // The end of the options

    cy.get('#upgradesButton')
      .contains('Volgende stap')
      .should('be.visible')
      .click();
      
    cy.get('#upgradeOptionm1').should('be.visible');
    cy.get('#upgradeOptionm1 > .upgradeOptionImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/upgrade/m1.jpg');

    cy.get('#upgradeOptionm2').should('be.visible');
    cy.get('#upgradeOptionm2 > .upgradeOptionImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/upgrade/m2.jpg');

    cy.get('#upgradeOptionX3').should('be.visible');
    cy.get('#upgradeOptionX3 > .upgradeOptionImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/upgrade/x3.jpg');

    cy.get('#upgradeOptionX4').should('be.visible');
    cy.get('#upgradeOptionX4 > .upgradeOptionImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/upgrade/x4.jpg');

      
      
    cy.get('.invoiceFooter > .configuratorButton')
      .contains('Volgende stap')
      .should('be.visible')
      .click();

    // Testing all the Extras to see if the images are corresponding with the product shown.
    cy.get(':nth-child(1) > .extraImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/extra/b983.jpg');
    cy.get(':nth-child(2) > .extraImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/extra/b814.jpg');
    cy.get(':nth-child(3) > .extraImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/extra/b655.jpg');
    cy.get(':nth-child(4) > .extraImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/extra/bbag.jpg');
    cy.get(':nth-child(5) > .extraImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/extra/a246.jpg');
    cy.get(':nth-child(6) > .extraImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/extra/stsh.jpg');
    cy.get(':nth-child(7) > .extraImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/extra/stsm.jpg');
    cy.get(':nth-child(8) > .extraImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/extra/stsl.jpg');
    cy.get(':nth-child(9) > .extraImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/extra/pice.jpg');
    cy.get(':nth-child(10) > .extraImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/extra/pist.jpg');
    cy.get(':nth-child(11) > .extraImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/extra/piwt.jpg');
    cy.get(':nth-child(12) > .extraImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/extra/pigt.jpg');
    cy.get(':nth-child(13) > .extraImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/extra/steg.jpg');
    cy.get(':nth-child(14) > .extraImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/extra/an20.jpg');
    cy.get(':nth-child(15) > .extraImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/extra/an40.jpg');
    cy.get(':nth-child(16) > .extraImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/extra/be13.jpg');
    cy.get(':nth-child(17) > .extraImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/extra/be16.jpg');


    cy.get('.extrasInvoice > .configuratorButton')
      .contains('Volgende stap')
      .should('be.visible')
      .click();
  });
});