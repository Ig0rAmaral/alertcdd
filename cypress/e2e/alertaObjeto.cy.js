/// <reference types="Cypress"/>

beforeEach('' , () => {
    cy.visita_site();
    cy.login_com_sucesso();
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
        })
});
describe('Alerta cidadão - Emissão de alerta ao objeto ', () => {
    it('CT001 - Emitir alerta ao objeto com sucesso', () => {
        cy.emitir_alerta();
    });
    it('CT002 - Remover alerta de objeto com sucesso', () => {
        cy.remover_alerta();
    });
});