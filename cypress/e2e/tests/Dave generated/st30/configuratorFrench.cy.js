let config = Cypress.config();
describe('Bike Configurator', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('#popup-buttons')
      .should('be.visible')
      .click();
  });

  //Select a language and country

  it.skip('Select language', function () {
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
      .should('be.visible')
      .click();
  });

  //Select an E-bike

  it('Your Stromer', function () {
    cy.visit(`${config.baseUrl}`+'/fr/configurator?bike=st30');
    
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s2nfnspi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s2nfnspi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls2nfnspi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5nfnspi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5nfnspi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5nfnspi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s2fenspi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s2fenspi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls2fenspi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5fenspi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5fenspi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5fenspi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s2nfsapi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s2nfsapi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls2nfsapi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5nfsapi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5nfsapi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5nfsapi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s2fesapi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s2fesapi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls2fesapi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5fesapi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5fesapi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5fesapi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s2nfnsab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s2nfnsab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls2nfnsab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5nfnsab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5nfnsab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5nfnsab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s2fensab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s2fensab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls2fensab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5fensab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5fensab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5fensab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s2nfsaab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s2nfsaab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls2nfsaab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5nfsaab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5nfsaab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5nfsaab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s2fesaab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s2fesaab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls2fesaab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5fesaab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5fesaab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5fesaab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s2nfnspi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s2nfnspi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls2nfnspi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5nfnspi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5nfnspi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5nfnspi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s2fenspi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s2fenspi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls2fenspi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5fenspi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5fenspi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5fenspi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s2nfsapi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s2nfsapi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls2nfsapi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5nfsapi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5nfsapi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5nfsapi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s2fesapi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s2fesapi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls2fesapi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5fesapi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5fesapi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5fesapi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s2nfnsab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s2nfnsab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls2nfnsab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5nfnsab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5nfnsab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5nfnsab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s2fensab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s2fensab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls2fensab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5fensab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5fensab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5fensab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s2nfsaab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s2nfsaab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls2nfsaab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5nfsaab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5nfsaab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5nfsaab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s2fesaab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s2fesaab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls2fesaab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspm0s5fesaab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspl0s5fesaab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwspxls5fesaab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s5nfnspi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2nfnspi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s5fenspi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2fenspi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s5nfsapi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2nfsapi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s5fesapi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2fesapi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s5nfnsab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2nfnsab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s5fensab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2fensab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s5nfsaab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2nfsaab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s5fesaab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2fesaab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s5nfnspi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2nfnspi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s5fenspi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2fenspi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s5nfsapi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2nfsapi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s5fesapi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2fesapi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s5nfnsab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2nfnsab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s5fensab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2fensab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s5nfsaab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2nfsaab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s5fesaab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_cw"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30cwcom0s2fesaab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s2nfnspi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s2nfnspi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls2nfnspi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5nfnspi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5nfnspi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5nfnspi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s2fenspi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s2fenspi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls2fenspi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5fenspi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5fenspi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5fenspi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s2nfsapi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s2nfsapi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls2nfsapi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5nfsapi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5nfsapi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5nfsapi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s2fesapi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s2fesapi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls2fesapi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5fesapi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5fesapi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5fesapi.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s2nfnsab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s2nfnsab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls2nfnsab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5nfnsab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5nfnsab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5nfnsab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s2fensab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s2fensab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls2fensab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5fensab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5fensab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5fensab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s2nfsaab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s2nfsaab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls2nfsaab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5nfsaab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5nfsaab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5nfsaab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s2fesaab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s2fesaab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls2fesaab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5fesaab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5fesaab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5fesaab.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_np"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s2nfnspi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s2nfnspi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls2nfnspi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5nfnspi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5nfnspi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5nfnspi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s2fenspi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s2fenspi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls2fenspi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5fenspi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5fenspi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5fenspi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s2nfsapi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s2nfsapi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls2nfsapi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5nfsapi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5nfsapi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5nfsapi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s2fesapi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s2fesapi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls2fesapi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5fesapi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5fesapi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_pi"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5fesapi.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s2nfnsab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s2nfnsab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls2nfnsab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5nfnsab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5nfnsab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5nfnsab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s2fensab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s2fensab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls2fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls2fensab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5fensab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5fensab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5fensab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s2nfsaab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s2nfsaab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls2nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls2nfsaab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5nfsaab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5nfsaab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5nfsa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5nfsaab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s2fesaab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
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
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s2fesaab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s2"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls2fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls2fesa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls2fesaab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspm0s5fesaab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspl0s5fesaab.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_db"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30db.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_xl"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxl.jpg');

    cy.get('[for="Sitzposition_s5"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5fesa.jpg');

    cy.get('[for="Pinion-Upgrade_ab"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st30dbspxls5fesaab.jpg');

    cy.get('[for="Reichweite_18"]')
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