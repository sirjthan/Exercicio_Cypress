import Cadastro from '../support/Pages/Cadastro/pagina cadastro'

describe('Página de cadastro', () => {

    beforeEach(() => {
        cy.visit('http://localhost:4200/')
    })

            it('Preencher os campos do formulario corretamente para cadastrar um novo usuário', () => {
                // cy.get('[data-test="register"]').click();
                // cy.get('input[data-test="email"]').type('catarina@email.com');
                // cy.get('input[data-test="fullName"]').type('catarina Medici');
                // cy.get('input[data-test="registerUserName"]').type('catmed');
                // cy.get('input[data-test="registerPassword"]').type('cat123456');
                // cy.get('[data-test="btnRegister"]').click();
                Cadastro.acessarPaginaDeCadastro();
                Cadastro.preencherFormulario();
                Cadastro.submeterCadastro();
            })
})