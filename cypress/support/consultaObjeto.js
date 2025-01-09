/// <reference types="Cypress"/>
import selectors from "./selectors";

Cypress.Commands.add('consultar_bicicleta_com_alerta' , () => {
    cy.get(selectors.campoConsultaBicicleta).type(Cypress.env('bicicletaComAlerta'));
    cy.get(selectors.lupaConsultaObjeto).click();
    cy.get(selectors.popupSituacaoObjeto, {timeout: 25000}).should('contain', 'Alerta');
});

Cypress.Commands.add('consultar_veiculo_com_alerta' , () => {

});

Cypress.Commands.add('consultar_celular_com_alerta' , () => {
    cy.get(selectors.caixaSelecaoTipoObjeto).click();
    cy.xpath(selectors.celularDropDownTipoObjeto).click();
    // cy.get(selectors.botaoSubirTela).click();
    // cy.wait(1000);
    cy.xpath(selectors.campoConsultaCelular).type(Cypress.env('celularComAlerta'));
    cy.get(selectors.lupaConsultaObjeto).click();
    cy.get(selectors.popupSituacaoObjeto, {timeout: 30000}).should('contain', 'Alerta emitido');
});

Cypress.Commands.add('consultar_bicicleta_sem_alerta' , () => {
    cy.get(selectors.campoConsultaBicicleta).type(Cypress.env('bicicletaSemAlerta'));
    cy.get(selectors.lupaConsultaObjeto).click();
    cy.get(selectors.popupSituacaoObjeto, {timeout: 30000}).should('contain', 'Não há registros de alertas para o objeto');
});

Cypress.Commands.add('consultar_veiculo_sem_alerta' , () => {
    cy.get(selectors.caixaSelecaoTipoObjeto).click();
    cy.xpath(selectors.veiculoDropDownTipoObjeto).click();
    cy.xpath(selectors.campoConsultaVeiculo).type(Cypress.env("veiculoSemAlerta"));
    cy.get(selectors.lupaConsultaObjeto).click();
    cy.get(selectors.popupSituacaoObjeto, {timeout: 30000}).should('contain', 'Não há registros de alertas para o objeto');
});

Cypress.Commands.add('consultar_celular_sem_alerta' , () => {
    cy.get(selectors.caixaSelecaoTipoObjeto).click();
    cy.xpath(selectors.celularDropDownTipoObjeto).click();
    // cy.get(selectors.botaoSubirTela).click();
    // cy.wait(1000);
    cy.xpath(selectors.campoConsultaCelular).type(Cypress.env('celularSemAlerta'));
    cy.get(selectors.lupaConsultaObjeto).click();
    cy.get(selectors.popupSituacaoObjeto, {timeout: 30000}).should('contain', 'Não há registros de alertas para o objeto');
});

Cypress.Commands.add('consultar_objeto_sem_dado_identificador' , () => {
    cy.get(selectors.lupaConsultaObjeto).click();
    cy.get(selectors.mensagemCampoObrigatorioConsultaObjeto, {timeout: 30000}).should('contain', 'Este campo é obrigatório');
});

Cypress.Commands.add('clicar_exclamacao_informacoes_consulta_objeto' , () => {
    cy.get(selectors.exclamacaoConsultaObjeto).click();
    cy.get(selectors.infoConsultaObjeto).should('contain', 'Consulta de Situação de Objetos');
    cy.get(selectors.botaoSairInfoConsultaObjeto).click();
    cy.get(selectors.tituloCampoConsultaObjeto, {timeout: 30000}).should('contain', 'Consulte aqui a situação de um objeto');
});