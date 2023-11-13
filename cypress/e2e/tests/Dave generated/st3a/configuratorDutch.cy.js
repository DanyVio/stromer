let config = Cypress.config();
describe('Bike Configurator', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.Popup__PopupCloseInsideInner-sc-17yhal5-5 button')
      .should('be.visible')
      .click({ multiple: true });
    cy.get('.agree-button')
      .should('be.visible')
      .click({ force: true });
  });

  //Select a language and country

  it('Select language', function () {
    cy.get('#block-multiswitcher-2')
      .should('be.visible')
      .click();

    cy.get('#aos-locale-multi-switcher-form--2 .custom-js-dropdown.custom-js-dropdown-language')
      .should('be.visible')
      .click();

    cy.get('#aos-locale-multi-switcher-form--2 .custom-js-dropdown-option.custom-js-dropdown-language-option').contains('Nederlands')
      .should('be.visible')
      .click();

    cy.get('#aos-locale-multi-switcher-form--2 [cdata-selector-target="aos-multi-switcher-country-selector"]')
      .should('be.visible')
      .click();

    cy.get('#aos-locale-multi-switcher-form--2 .custom-js-dropdown-option.custom-js-dropdown-country-options').contains('Netherlands')
      .should('be.visible')
      .click();

    cy.get('#edit-submit--2')
      .should('be.visible')
      .click();
  });

  //Select an E-bike

  it('Your Stromer -> ST1', function () {
    cy.visit(`${config.baseUrl}`+'/nl/configurator?bike=st3a');
    
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3argspl0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3argspl0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3argspl0s5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3argspl0s5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3argspl0s5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3argspm0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3argspm0s5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3argspm0s5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3argspm0s5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3argspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3argspxls5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3argspxls5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3argspxls5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3argspxls5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();

    // The end of the options

    cy.get('#upgradesButton')
      .contains('Volgende stap')
      .should('be.visible')
      .click();
      
    cy.get('#upgradeOptionh1').should('be.visible');
    cy.get('#upgradeOptionh1 > .upgradeOptionImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/upgrade/h1.jpg');

    cy.get('#upgradeOptionh2').should('be.visible');
    cy.get('#upgradeOptionh2 > .upgradeOptionImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/upgrade/h2.jpg');

      
      
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