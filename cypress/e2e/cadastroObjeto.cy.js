/// <reference types="Cypress"/>

beforeEach('' , () => {
    cy.visita_site();
    cy.login_com_sucesso();
});
describe('Alerta cidadão - Cadastro de objeto', () => {
    it.only('CT001 - Cadastrar nova bicicleta com sucesso', () => {
        cy.cadastrar_bicicleta();
    });
    it('CT002 - Cadastrar novo veículo com sucesso', () => {
        
    });
    it.only('CT003 - Cadastrar novo celular com sucesso', () => {
        cy.cadastrar_celular();
    });
    it.only('CT004 - Excluir objeto com sucesso', () => {
        cy.busca_ultimo_objeto();
        cy.excluir_objeto();
    });
});