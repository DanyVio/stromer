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
      .should('be.visible')
      .click();
  });

  //Select an E-bike

  it('Your Stromer', function () {
    cy.visit(`${config.baseUrl}`+'/fr/configurator?bike=st10');
    
    cy.get('[for="Farbe_lg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgspm0.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_lg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
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
    cy.get('[for="Farbe_lg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgspm0.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgspm0p6fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_lg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgspl0p6fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_lg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgspm0.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgspm0p6nfsa.jpg');

    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_lg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgspl0p6nfsa.jpg');

    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_lg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgspm0.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgspm0p6fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgspm0p6fesa.jpg');

    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_lg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgspl0p6fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgspl0p6fesa.jpg');

    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_lg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgspm0.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_lg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_lg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgspm0.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgspm0p6fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_lg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgspl0p6fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_lg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgspm0.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgspm0p6nfsa.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_lg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgspl0p6nfsa.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_lg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgspm0.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgspm0p6fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgspm0p6fesa.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_lg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgspl0p6fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgspl0p6fesa.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_lg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgspm0.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_lg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_lg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgspm0.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgspm0p6fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_lg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgspl0p6fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_lg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgspm0.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgspm0p6nfsa.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_lg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgspl0p6nfsa.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_lg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgspm0.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgspm0p6fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgspm0p6fesa.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_lg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgspl0p6fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgspl0p6fesa.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_lg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lg.jpg');

    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
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
    cy.get('[for="Farbe_lg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lg.jpg');

    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgcom0p6fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_lg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lg.jpg');

    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgcom0p6nfsa.jpg');

    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_lg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lg.jpg');

    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgcom0p6fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgcom0p6fesa.jpg');

    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_lg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lg.jpg');

    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_lg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lg.jpg');

    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgcom0p6fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_lg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lg.jpg');

    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgcom0p6nfsa.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_lg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lg.jpg');

    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgcom0p6fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgcom0p6fesa.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_lg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lg.jpg');

    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_lg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lg.jpg');

    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgcom0p6fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_lg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lg.jpg');

    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgcom0p6nfsa.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_lg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lg.jpg');

    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgcom0p6fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10lgcom0p6fesa.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgspm0.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
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
    cy.get('[for="Farbe_dg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgspm0.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgspm0p6fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgspl0p6fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgspm0.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgspm0p6nfsa.jpg');

    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgspl0p6nfsa.jpg');

    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgspm0.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgspm0p6fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgspm0p6fesa.jpg');

    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgspl0p6fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgspl0p6fesa.jpg');

    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgspm0.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgspm0.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgspm0p6fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgspl0p6fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgspm0.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgspm0p6nfsa.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgspl0p6nfsa.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgspm0.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgspm0p6fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgspm0p6fesa.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgspl0p6fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgspl0p6fesa.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgspm0.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgspm0.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgspm0p6fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgspl0p6fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgspm0.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgspm0p6nfsa.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgspl0p6nfsa.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgspm0.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgspm0p6fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgspm0p6fesa.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dg.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgspl0p6fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgspl0p6fesa.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dg.jpg');

    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
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
    cy.get('[for="Farbe_dg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dg.jpg');

    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgcom0p6fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dg.jpg');

    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgcom0p6nfsa.jpg');

    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dg.jpg');

    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgcom0p6fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgcom0p6fesa.jpg');

    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dg.jpg');

    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dg.jpg');

    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgcom0p6fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dg.jpg');

    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgcom0p6nfsa.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dg.jpg');

    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgcom0p6fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgcom0p6fesa.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dg.jpg');

    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dg.jpg');

    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgcom0p6fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dg.jpg');

    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgcom0p6nfsa.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dg"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dg.jpg');

    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgcom0p6fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dgcom0p6fesa.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dp.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpsp.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspm0.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dp.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpsp.jpg');

    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspl0.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dp.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpsp.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspm0.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspm0p6fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dp.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpsp.jpg');

    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspl0.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspl0p6fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dp.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpsp.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspm0.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspm0p6nfsa.jpg');

    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dp.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpsp.jpg');

    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspl0.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspl0p6nfsa.jpg');

    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dp.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpsp.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspm0.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspm0p6fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspm0p6fesa.jpg');

    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dp.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpsp.jpg');

    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspl0.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspl0p6fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspl0p6fesa.jpg');

    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dp.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpsp.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspm0.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dp.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpsp.jpg');

    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspl0.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dp.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpsp.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspm0.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspm0p6fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dp.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpsp.jpg');

    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspl0.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspl0p6fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dp.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpsp.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspm0.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspm0p6nfsa.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dp.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpsp.jpg');

    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspl0.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspl0p6nfsa.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dp.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpsp.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspm0.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspm0p6fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspm0p6fesa.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dp.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpsp.jpg');

    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspl0.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspl0p6fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspl0p6fesa.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dp.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpsp.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspm0.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dp.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpsp.jpg');

    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspl0.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dp.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpsp.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspm0.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspm0p6fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dp.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpsp.jpg');

    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspl0.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspl0p6fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dp.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpsp.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspm0.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspm0p6nfsa.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dp.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpsp.jpg');

    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspl0.jpg');

    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspl0p6nfsa.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dp.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpsp.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspm0.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspm0p6fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspm0p6fesa.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dp.jpg');

    cy.get('[for="Rahmenart_sp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpsp.jpg');

    cy.get('[for="Rahmengrösse_l0"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspl0.jpg');

    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspl0p6fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpspl0p6fesa.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dp.jpg');

    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
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
    cy.get('[for="Farbe_dp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dp.jpg');

    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpcom0p6fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dp.jpg');

    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpcom0p6nfsa.jpg');

    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dp.jpg');

    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpcom0p6fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpcom0p6fesa.jpg');

    cy.get('[for="Reichweite_12"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dp.jpg');

    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dp.jpg');

    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpcom0p6fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dp.jpg');

    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpcom0p6nfsa.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dp.jpg');

    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpcom0p6fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpcom0p6fesa.jpg');

    cy.get('[for="Reichweite_15"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dp.jpg');

    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dp.jpg');

    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpcom0p6fe.jpg');

    cy.get('[for="Sattelstütze_ns"]')
      .should('be.visible')
      .click();
    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dp.jpg');

    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_nf"]')
      .should('be.visible')
      .click();
    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpcom0p6nfsa.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();
    cy.get('[for="Farbe_dp"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dp.jpg');

    cy.get('[for="Rahmenart_co"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpco.jpg');

    cy.get('[for="Rahmengrösse_m0"]')
      .should('be.visible')
      .click();
    cy.get('[for="Federgabel_fe"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpcom0p6fe.jpg');

    cy.get('[for="Sattelstütze_sa"]')
      .should('be.visible')
      .click();
    cy.get('#bikepreviewimg').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/bikes/st10dpcom0p6fesa.jpg');

    cy.get('[for="Reichweite_18"]')
      .should('be.visible')
      .click();

    // The end of the options

    cy.get('#upgradesButton')
      .contains('Prochaine étape')
      .should('be.visible')
      .click();
      
    cy.get('#upgradeOptionl1').should('be.visible');
    cy.get('#upgradeOptionl1 > .upgradeOptionImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/upgrade/l1.jpg');

    cy.get('#upgradeOptionl2').should('be.visible');
    cy.get('#upgradeOptionl2 > .upgradeOptionImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/upgrade/l2.jpg');

    cy.get('#upgradeOptionV3').should('be.visible');
    cy.get('#upgradeOptionV3 > .upgradeOptionImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/upgrade/v3.jpg');

    cy.get('#upgradeOptionV4').should('be.visible');
    cy.get('#upgradeOptionV4 > .upgradeOptionImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/upgrade/v4.jpg');

      
      
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
    cy.get(':nth-child(13) > .extraImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/extra/ta75.jpg');
    cy.get(':nth-child(14) > .extraImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/extra/steg.jpg');
    cy.get(':nth-child(15) > .extraImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/extra/an20.jpg');
    cy.get(':nth-child(16) > .extraImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/extra/an40.jpg');
    cy.get(':nth-child(17) > .extraImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/extra/be13.jpg');
    cy.get(':nth-child(18) > .extraImg > img').should('have.prop', 'src', 'https://www.stromerbike.com/bike-configurator/img/extra/be16.jpg');


    cy.get('.extrasInvoice > .configuratorButton')
      .contains('Prochaine étape')
      .should('be.visible')
      .click();
  });
});