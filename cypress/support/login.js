/// <reference types="Cypress"/>
import selectors from "./selectors";

Cypress.Commands.add ('visita_site' , () => {
    cy.visit(selectors.url);
});

Cypress.Commands.add ('login_com_sucesso' , () => {
    cy.get(selectors.botaoAcessar).click();
    cy.wait(1000);
    cy.xpath(selectors.campoCpfEmailLogin).type(Cypress.env('email'));
    cy.get(selectors.campoSenhaLogin).type(Cypress.env('senha'));
    cy.wait(1000);
    cy.get(selectors.botaoEntrarLogin).click({force: true});
    cy.get(selectors.botaoCadastrarNovoObjeto, {timeout: 15000}).should('contain', 'Cadastrar novo objeto');
});

Cypress.Commands.add ('login_email_invalido' , () => {
    cy.get(selectors.botaoAcessar).click();
    cy.wait(1000);
    cy.xpath(selectors.campoCpfEmailLogin).type(Cypress.env('emailInvalido')).clear();
    cy.xpath(selectors.campoCpfEmailLogin).type(Cypress.env('emailInvalido'));
    cy.get(selectors.campoSenhaLogin).type(Cypress.env('senha'));
    cy.get(selectors.botaoEntrarLogin).click();
    cy.get(selectors.popupLoginOuSenhaInvalidos, {timeout: 10000}).should('contain', 'Login ou senha inválidos, por favor tente novamente');
});

Cypress.Commands.add ('login_senha_invalida' , () => {
    cy.get(selectors.botaoAcessar).click();
    cy.wait(1000);
    cy.xpath(selectors.campoCpfEmailLogin).type(Cypress.env('email'));
    cy.get(selectors.campoSenhaLogin).type(Cypress.env('senhaInvalida'));
    cy.get(selectors.botaoEntrarLogin).click();
    cy.get(selectors.popupLoginOuSenhaInvalidos, {timeout: 10000}).should('contain', 'Login ou senha inválidos, por favor tente novamente');
});

Cypress.Commands.add ('login_email_em_branco' , () => {
    cy.get(selectors.botaoAcessar).click();
    cy.wait(1000);
    cy.get(selectors.campoSenhaLogin).type(Cypress.env('senha'));
    cy.get(selectors.botaoEntrarLoginDesativado).should('be.disabled');
});

Cypress.Commands.add ('login_senha_em_branco' , () => {
    cy.get(selectors.botaoAcessar).click();
    cy.wait(1000);
    cy.xpath(selectors.campoCpfEmailLogin).type(Cypress.env('email'));
    cy.get(selectors.botaoEntrarLoginDesativado).should('be.disabled');
});

Cypress.Commands.add ('botao_X_login' , () => {
    cy.get(selectors.botaoAcessar).click();
    cy.wait(1000);
    cy.get(selectors.botaoXLogin).click();
    cy.get(selectors.textoHome, {timeout: 10000}).should('contain', 'A segurança pública mais próxima do cidadão para que a harmonia social seja cada dia mais uma certeza!');
});

Cypress.Commands.add ('cadastre_agora' , () => {
    cy.get(selectors.botaoAcessar).click();
    cy.wait(1000);
    cy.get(selectors.cadastreAgoraLogin).click();
    cy.get(selectors.tituloTelaCadastro, {timeout: 10000}).should('contain', 'Bem vindo, crie sua conta!');
});

Cypress.Commands.add ('realizar_logout' , () => {
    cy.wait(1000);
    cy.get(selectors.botaoSairLogout).click();
    cy.wait(1000);
    cy.get(selectors.tituloTelaLogin, {timeout: 10000}).should('contain', 'Vamos começar? Acesse sua conta!');
});

Cypress.Commands.add ('link_recuperar_senha' , () => {
    cy.get(selectors.botaoAcessar).click();
    cy.wait(1000);
    cy.get(selectors.botaoEsqueceuSenhaLogin).click();
    cy.get(selectors.tituloTelaEsqueceuSenha, {timeout: 10000}).should('contain', 'Preencha o campo abaixo para recuperar sua senha');
});