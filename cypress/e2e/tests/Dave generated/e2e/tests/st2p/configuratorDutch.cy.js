let config = Cypress.config();
describe('Bike Configurator', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
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

  //Select an  ST2p E-bike

  it('Your Stromer -> ST2p', function () {
    cy.visit(`${config.baseUrl}`+'/nl/configurator?bike=st2p');
    
    cy.get('[for="Farbe_dg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st2pdg.jpg');

    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st2pdgco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st2pdgcom0p7fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st2pdgcom0p7fesa.jpg');

    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st2pdgcom0p7nfsa.jpg');

    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st2pdgspl0.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st2pdgspl0p7fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st2pdgspl0p7fesa.jpg');

    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st2pdgspl0p7nfsa.jpg');

    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st2pdgspm0p7fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st2pdgspm0p7fesa.jpg');

    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st2pdgspm0p7nfsa.jpg');

    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_el"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st2pel.jpg');

    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st2pelspl0.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st2pelspl0p7fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st2pelspl0p7fesa.jpg');

    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st2pelspl0p7nfsa.jpg');

    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st2pelspm0p7fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st2pelspm0p7fesa.jpg');

    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st2pelspm0p7nfsa.jpg');

    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_mg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st2pmg.jpg');

    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st2pmgco.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st2pmgcom0p7fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st2pmgcom0p7fesa.jpg');

    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st2pmgcom0p7nfsa.jpg');

    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st2pmgspl0.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st2pmgspl0p7fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st2pmgspl0p7fesa.jpg');

    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st2pmgspl0p7nfsa.jpg');

    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st2pmgspm0p7fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st2pmgspm0p7fesa.jpg');

    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st2pmgspm0p7nfsa.jpg');

    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();

    // The end of the options

    cy.get('#upgradesButton')
      .contains('Volgende stap')
      .should('be.visible')
      .click();
      
    cy.get('#upgradeOptioni1').should('be.visible');
    cy.get('#upgradeOptioni1 > .upgradeOptionImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/upgrade/i1.jpg');

    cy.get('#upgradeOptioni2').should('be.visible');
    cy.get('#upgradeOptioni2 > .upgradeOptionImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/upgrade/i2.jpg');

    cy.get('#upgradeOptionj1').should('be.visible');
    cy.get('#upgradeOptionj1 > .upgradeOptionImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/upgrade/j1.jpg');

    cy.get('#upgradeOptionj2').should('be.visible');
    cy.get('#upgradeOptionj2 > .upgradeOptionImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/upgrade/j2.jpg');

    cy.get('#upgradeOptionj3').should('be.visible');
    cy.get('#upgradeOptionj3 > .upgradeOptionImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/upgrade/j3.jpg');

      
      
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
    cy.get(':nth-child(13) > .extraImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/extra/ta75.jpg');
    cy.get(':nth-child(14) > .extraImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/extra/steg.jpg');
    cy.get(':nth-child(15) > .extraImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/extra/an20.jpg');
    cy.get(':nth-child(16) > .extraImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/extra/an40.jpg');
    cy.get(':nth-child(17) > .extraImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/extra/be13.jpg');
    cy.get(':nth-child(18) > .extraImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/extra/be16.jpg');


    cy.get('.extrasInvoice > .configuratorButton')
      .contains('Volgende stap')
      .should('be.visible')
      .click();
  });
});