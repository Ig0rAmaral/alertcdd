/// <reference types="Cypress"/>
import selectors from "./selectors";
import faker from 'faker';
const randomName =  faker.name.lastName();
const numerosAleatorios = gerarNumerosAleatorios().toString();

function gerarNumerosAleatorios() {
    return faker.random.number({min: 100000, max: 999999})
};

Cypress.Commands.add('cadastrar_bicicleta' , () => {
    cy.get(selectors.botaoCadastrarNovoObjeto).click();
    cy.wait(1000);
    cy.get(selectors.campoTipoObjetoCadastro).click();
    cy.wait(1000);
    cy.xpath(selectors.dropDownTipoBicicletaCadastro).click();
    cy.get(selectors.botaoIniciarCadastro).click();
    cy.wait(1000);
    cy.xpath(selectors.campoMarcaCadastroBicicleta).type('Caloi');
    cy.get(selectors.campoModeloCadastroBicicleta).type(randomName);
    cy.get(selectors.campoCorCadastroBicicleta).type('Dourado');
    cy.get(selectors.campoNumeroSerieCadastroBicicleta).type(numerosAleatorios);
    cy.get(selectors.campoObservacaoCadastroBicicleta).type('Bicicleta cadastrada pela automação');
    cy.get(selectors.botaoCadastrarTelaCadastroObjeto).click();
    cy.get(selectors.mensagemBicicletaRegistradaSucesso, {timeout: 15000}).should('contain', 'Bicicleta registrada com sucesso');
    cy.get(selectors.botaoAgoraNaoDownloadQrcode, {timeout: 15000}).click();
    cy.get(selectors.telaInicialObjetosCadastrados, {timeout: 15000}).should('contain', numerosAleatorios);
});

Cypress.Commands.add('cadastrar_veículo' , () => {
    
});

Cypress.Commands.add('cadastrar_celular' , () => {
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
    cy.get(selectors.campoModeloCadastroCelular).type('TT33');
    cy.xpath(selectors.campoImeiCadastroCelular).type('865282714800966');
    cy.xpath(selectors.campoDescricaoCadastroCelular).type('Automação');
    cy.get(selectors.botaoCadastrarTelaCadastroObjeto).click();
    cy.get(selectors.mensagemCelularCadastradoSucesso, {timeout: 15000}).should('contain', 'Celular cadastrado com sucesso');
    cy.get(selectors.botaoOkCelularCadastradoSucesso).click();
    cy.get(selectors.telaInicialObjetosCadastrados, {timeout: 15000}).should('contain', '865282714800966');
    });
});

Cypress.Commands.add('busca_ultimo_objeto' , () => {
    cy.wait(500);
    cy.document().then((doc) => {
        const size = doc.querySelectorAll(".v-card").length
        cy.get(`div.v-application--wrap > main > div > div > div:nth-child(2) div:nth-child(${size}) span`).click({ multiple: true });
    });
});

Cypress.Commands.add('excluir_objeto' , () => {
    cy.get(selectors.botaoExcluirObjeto).click();
    cy.get(selectors.botaoConfirmarExclusaoObjeto).click();
    cy.get(selectors.mensagemObjetoExcluidoSucesso, {timeout: 15000}).should('contain', 'Objeto excluído com sucesso!');
});