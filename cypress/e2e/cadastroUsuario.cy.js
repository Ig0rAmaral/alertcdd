/// <reference types="Cypress"/>

beforeEach('' , () => {
    cy.visita_site();
});
describe('Alerta Cidadão - Cadastro de usuário', () => {
    // it('CT001 - Realizar cadastro como brasileiro com sucesso', () => {
    //     cy.cadastro_brasileiro_com_sucesso();
    // });
    //it('CT002 - Realizar cadastro como estrangeiro com sucesso', () => {
    //   cy.cadastro_estrangeiro_com_sucesso();
    //});
    it('CT003 - Cadastro com o campo "Nome" em branco', () => {
        cy.cadastro_nome_em_branco();
    });
    it('CT004 - Cadastro com o campo "CPF" em branco', () => {
        cy.cadastro_cpf_em_branco();
    });
    it('CT005 - Cadastro com o campo "Mãe" em branco', () => {
        cy.cadastro_nome_mae_em_branco();
    });
    it('CT006 - Cadastro com o campo "Estado de Residência" em branco', () => {
        cy.cadastro_estado_residencia_em_branco();
    });
    it('CT007 - Cadastro com o campo "Cidade de Residência" em branco', () => {
        cy.cadastro_cidade_residencia_em_branco();
    });
    // it('CT008 - Cadastro com o campo "Passaporte" em branco', () => {
    //     cy.cadastro_passaporte_em_branco();
    // });
    // it('CT009 - Cadastro com o campo "Estado" em branco', () => {
    //     cy.cadastro_estado_em_branco();
    // });
    // it('CT010 - Cadastro com o campo "Cidade" em branco', () => {
    //     cy.cadastro_cidade_em_branco();
    // });
    it('CT011 - Clicar em "Entre" caso o usuário já tenha uma conta', () => {
        cy.clicar_em_entre();
    });
    it('CT012 - Clicar no botão "X" ao lado do botão "Avançar"', () => {
        cy.clicar_botao_X();
    });
    it('CT013 - Cadastro com um CPF já cadastrado no sistema', () => {
        cy.cadastro_cpf_ja_cadastrado();
    });
    it('CT014 - Cadastro com um e-mail já cadastrado no sistema', () => {
        cy.cadastro_email_ja_cadastrado();
    });
});