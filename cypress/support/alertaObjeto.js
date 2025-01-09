/// <reference types="Cypress"/>
import selectors from "./selectors";

Cypress.Commands.add('cadastrar_objeto' , () => {
    cy.get(selectors.botaoCadastrarNovoObjeto).click();
    cy.wait(1000);
    cy.get(selectors.campoTipoObjetoCadastro).click();
    cy.wait(1000);
    cy.xpath(selectors.dropDownTipoCelularCadastro).click();
    cy.get(selectors.botaoIniciarCadastro).click();
    cy.wait(1000);
    cy.xpath(selectors.campoMarcaCadastroCelular).click();
    cy.wait(1000);
    cy.get(selectors.dropDownMarcaCelularCadastro).then($options => {
        const randomIndex = Math.floor(Math.random() * $options.length)
        const randomOption = $options[randomIndex]
        cy.wrap(randomOption).click()
    cy.get(selectors.campoModeloCadastroCelular).type('TT44');
    cy.xpath(selectors.campoImeiCadastroCelular).type('917604191588079');
    cy.xpath(selectors.campoDescricaoCadastroCelular).type('Automação');
    cy.get(selectors.botaoCadastrarTelaCadastroObjeto).click();
    cy.get(selectors.mensagemCelularCadastradoSucesso, {timeout: 20000}).should('contain', 'Celular cadastrado com sucesso');
    cy.get(selectors.botaoOkCelularCadastradoSucesso).click();
    cy.get(selectors.telaInicialObjetosCadastrados, {timeout: 10000}).should('contain', '917604191588079');
    });
});

Cypress.Commands.add('emitir_alerta' , () => {
    cy.get('.row')                      
    .find('.col-sm-6.col-md-4') 
    .contains('55522D')
    .parents('.col-sm-6.col-md-4')
    .contains('Mostrar detalhes')
    .click(); 

    cy.get(selectors.botaoAlertarObjeto).click();
    cy.get(selectors.campoInformeCidadeAlerta).type('Salvador');
    cy.wait(500);
    cy.get(selectors.itemListaCidadeAlerta).click();
    cy.get(selectors.campoLogradouroAlerta).type('a');
    cy.wait(1000)
    cy.get(selectors.dropDownLogradouroAlerta).then($options => {
        const randomIndex = Math.floor(Math.random() * $options.length)
        const randomOption = $options[randomIndex]
        cy.wrap(randomOption).click()
    });
    cy.wait(1000)
    cy.get(selectors.botaoConfirmarAlerta).click();
    cy.get(selectors.modalAlertaGeradoSucesso, {timeout: 15000}).should('contain', 'Alerta temporário gerado com sucesso');
    cy.get(selectors.botaoOkAlertaGerado).click();
    cy.get(selectors.situacaoObjeto, {timeout: 5000}).should('contain', 'Alerta de Furto, Roubo ou Extravio registrado pelo usuário');
     });

Cypress.Commands.add('remover_alerta' , () => {
    cy.wait(500);
    cy.get('.row')                      
    .find('.col-sm-6.col-md-4') 
    .contains('55522D')
    .parents('.col-sm-6.col-md-4')
    .contains('Mostrar detalhes')
    .click(); 
 
    cy.get(selectors.botaoRemoverAlerta).click();
    cy.get(selectors.botaoSimRemoverAlerta).click();
    cy.wait(500);
    cy.get(selectors.modalAlertaRemovido, {timeout: 15000}).should('contain', 'Alerta removido com sucesso');
    cy.get(selectors.botaoOkAlertaRemovido).click();
    cy.wait(500);
});