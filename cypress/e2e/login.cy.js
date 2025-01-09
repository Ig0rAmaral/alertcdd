/// <reference types="Cypress"/>

beforeEach('' , () => {
    cy.visita_site();
});
describe('Alerta Cidadão - Login', () => {
    it('CT001 - Realizar login com sucesso', () => {
        cy.login_com_sucesso();
    });
    it('CT002 - Login com e-mail inválido', () => {
        cy.login_email_invalido();
    });
    it('CT003 - Login com senha inválida', () => {
        cy.login_senha_invalida();
    });
    it('CT004 - Login com e-mail em branco', () => {
        cy.login_email_em_branco();
    });
    it('CT005 - Login com senha em branco', () => {
        cy.login_senha_em_branco();
    });
    it('CT006 - Voltar para página inicial ao clicar no botão X', () => {
        cy.botao_X_login();
    });
    it('CT007 - Link para cadastrar-se agora', () => {
        cy.cadastre_agora();
    });
    it('CT008 - Realizar logout do sistema', () => {
        cy.login_com_sucesso();
        cy.realizar_logout();
    });
    it('CT009 - Link para recuperar senha', () => {
        cy.link_recuperar_senha();
    });
});
