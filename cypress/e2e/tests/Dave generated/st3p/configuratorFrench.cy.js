let config = Cypress.config();
describe('Bike Configurator', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('#popup-buttons')
      .should('be.visible')
      .click();
  });

  //Select a language and country

  it('Select language', function () {
    cy.get('#block-multiswitcher-2')
      .should('be.visible')
      .click();

    cy.get('#aos-locale-multi-switcher-form--2 .custom-js-dropdown.custom-js-dropdown-language')
      .should('be.visible')
      .click();

    cy.get('#aos-locale-multi-switcher-form--2 .custom-js-dropdown-option.custom-js-dropdown-language-option').contains('Français')
      .should('be.visible')
      .click();

    cy.get('#aos-locale-multi-switcher-form--2 [cdata-selector-target="aos-multi-switcher-country-selector"]')
      .should('be.visible')
      .click();

    cy.get('#aos-locale-multi-switcher-form--2 .custom-js-dropdown-option.custom-js-dropdown-country-options').contains('France')
      .should('be.visible')
      .click();

    cy.get('#edit-submit--2')
      .click({force: true});
  });

  //Select an E-bike

  it('Your Stromer', function () {
    cy.visit(`${config.baseUrl}`+'/fr/configurator?bike=st3p');
    
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspm0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspl0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspxls5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspm0s2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspl0s2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspxls2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspm0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspm0s5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspl0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspl0s5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspxls5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspxls5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspm0s2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspl0s2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspxls2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspm0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspm0s5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspl0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspl0s5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspxls5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspxls5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspm0s2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspm0s2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspl0s2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspl0s2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspxls2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspxls2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspm0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspm0s5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspm0s5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspl0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspl0s5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspl0s5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspxls5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspxls5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspxls5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
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
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s2"]')
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
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
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
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspm0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspl0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspxls5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspm0s2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspl0s2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspxls2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspm0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspm0s5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspl0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspl0s5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspxls5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspxls5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspm0s2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspl0s2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspxls2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspm0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspm0s5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspl0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspl0s5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspxls5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspxls5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspm0s2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspm0s2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspl0s2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspl0s2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspxls2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspxls2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspm0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspm0s5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspm0s5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspl0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspl0s5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspl0s5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspxls5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspxls5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st3pirspxls5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();

    // The end of the options

    cy.get('#upgradesButton')
      .contains('Prochaine étape')
      .should('be.visible')
      .click();
      
    cy.get('#upgradeOptionh1').should('be.visible');
    cy.get('#upgradeOptionh1 > .upgradeOptionImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/upgrade/h1.jpg');

    cy.get('#upgradeOptionh2').should('be.visible');
    cy.get('#upgradeOptionh2 > .upgradeOptionImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/upgrade/h2.jpg');

    cy.get('#upgradeOptionu1').should('be.visible');
    cy.get('#upgradeOptionu1 > .upgradeOptionImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/upgrade/u1.jpg');

      
      
    cy.get('.invoiceFooter > .configuratorButton')
      .contains('Prochaine étape')
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
      .contains('Prochaine étape')
      .should('be.visible')
      .click();
  });
});