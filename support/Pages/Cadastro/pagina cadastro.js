const el = require('./elements').ELEMENTS;

class Cadastro {
    acessarPaginaDeCadastro() {
        cy.visit('http://localhost:4200/');
        cy.get('[data-test="register"]').click();
    }

    preencherFormulario(){
        
          cy.get('input[data-test="email"]').type('catarina@email.com');
          cy.get('input[data-test="fullName"]').type('catarina Medici');
          cy.get('input[data-test="registerUserName"]').type('catmed');
          cy.get('input[data-test="registerPassword"]').type('cat123456');
    }

    submeterCadastro(){
        cy.get('[data-test="btnRegister"]').click();
    }
}

export default new Cadastro();