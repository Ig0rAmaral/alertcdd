/// <reference types="Cypress"/>
import selectors from "./selectors";
import faker from 'faker';
faker.locale = 'pt_BR';
const randomName = removerCaracteresEspeciais (faker.name.findName());
const randomName2 = removerCaracteresEspeciais (faker.name.findName());
const randomName3 = removerCaracteresEspeciais (faker.name.findName());
const randomName4 = removerCaracteresEspeciais (faker.name.findName());
const randomName5 = removerCaracteresEspeciais (faker.name.findName());
const randomName6 = removerCaracteresEspeciais (faker.name.findName());
const randomName7 = removerCaracteresEspeciais (faker.name.findName());
const randomName8 = removerCaracteresEspeciais (faker.name.findName());
const randomName9 = removerCaracteresEspeciais (faker.name.findName());
const randomName10 = removerCaracteresEspeciais (faker.name.findName());
const numerosAleatorios = gerarNumerosAleatorios().toString();
const email = faker.internet.email();
const email2 = faker.internet.email();
let dtNascimento = faker.date.between('1950/01/01','2000/01/01').toLocaleDateString();

function removerCaracteresEspeciais(nome) {
    const caracteresPermitidos = /^[a-zA-Z]+$/;
    return nome.replace(/[^a-zA-Z]/g, ' ');
};

function gerarNumerosAleatorios() {
    return faker.random.number({min: 100000, max: 999999})
};

Cypress.Commands.add ('cadastro_brasileiro_com_sucesso' , () => {
    cy.get(selectors.botaoAcessar).click({ multiple: true });
    cy.wait(1000);
    cy.get(selectors.cadastreAgoraLogin).click();
    cy.get(selectors.campoNomeCadastro).type(randomName);
    cy.gerarCPFValido().then((cpf) => {
    cy.get(selectors.campoCpfCadastro).type(cpf);
});
    cy.get(selectors.campoMaeCadastro).type(randomName2);
    cy.get(selectors.campoPaiCadastro).type(randomName3);
    cy.get(selectors.campoDtNascimentoCadastro).type(dtNascimento);
    cy.get(selectors.botaoCancelarCalendarioCadastro).click()
    cy.get(selectors.campoDtNascimentoCadastro).clear().type(dtNascimento);
    cy.get(selectors.campoEstadoResidenciaCadastro).click();
    cy.get(selectors.dropDownBahiaResidenciaCadastro).click();
    cy.get(selectors.campoCidadeResidenciaCadastro).type('Salvador');
    cy.get(selectors.dropDownSalvadorCidadeResidenciaCadastro).click();
    cy.get(selectors.botaoAvancarAtivadoCadastro).click();
    cy.get(selectors.campoEmailCadastro).type(email);
    cy.get(selectors.campoConfirmarEmailCadastro).type(email);
    cy.get(selectors.campoTelefoneCadastro).type(Cypress.env('numeroTelefone'))
    cy.get(selectors.campoCelularCadastro).type(Cypress.env('numeroCelular'));
    cy.get(selectors.botaoAvancarAtivadoCadastro).click();
    cy.get(selectors.campoSenhaAcessoCadastro).type(Cypress.env('senhaAcesso'));
    cy.get(selectors.campoConfirmarSenhaCadastro).type(Cypress.env('senhaAcesso'));
    cy.get(selectors.caixaConcordarTermosCadastro).click();
    cy.get(selectors.botaoConcluirCadastro).click();
    cy.get(selectors.mensagemCadastroComSucesso, {timeout: 15000}).should('be.visible');
    cy.get(selectors.botaoOkCadastroComSucesso).click();
    cy.get(selectors.tituloTelaLogin, {timeout: 10000}).should('contain', 'Vamos começar? Acesse sua conta!');
});

Cypress.Commands.add ('cadastro_estrangeiro_com_sucesso' , () => {
    cy.get(selectors.botaoAcessar).click({ multiple: true });
    cy.wait(1000);
    cy.get(selectors.cadastreAgoraLogin).click();
    cy.wait(1000);
    cy.get(selectors.campoNacionalidadeCadastro).click();
    cy.wait(500);
    cy.get(selectors.estrangeiroDropDownNacionalidade).click();
    cy.wait(500);
    cy.get(selectors.campoNomeCadastro).type(randomName4);
    cy.get(selectors.campoPassaporteCadastro).type('TT');
    cy.get(selectors.campoPassaporteCadastro).type(numerosAleatorios);
    cy.get(selectors.campoEstadoCadastroEstrangeiro).click();
    cy.get(selectors.dropDownBahiaCadastroEstrangeiro).click();
    cy.get(selectors.campoCidadeCadastroEstrangeiro).type('Salvador');
    cy.wait(500);
    cy.get(selectors.dropDownSalvadorCadastroEstrangeiro).click();
    cy.get(selectors.botaoAvancarAtivadoCadastro).click();
    cy.get(selectors.campoEmailCadastro).type(email2);
    cy.get(selectors.campoConfirmarEmailCadastro).type(email2);
    cy.get(selectors.campoTelefoneCadastro).type(Cypress.env('numeroTelefone'))
    cy.get(selectors.campoCelularCadastro).type(Cypress.env('numeroCelular'));
    cy.get(selectors.botaoAvancarAtivadoCadastro).click();
    cy.get(selectors.campoSenhaAcessoCadastro).type(Cypress.env('senhaAcesso'));
    cy.get(selectors.campoConfirmarSenhaCadastro).type(Cypress.env('senhaAcesso'));
    cy.get(selectors.caixaConcordarTermosCadastro).click();
    cy.get(selectors.botaoConcluirCadastro).click();
    cy.get(selectors.mensagemCadastroComSucesso, {timeout: 15000}).should('be.visible');
    cy.get(selectors.botaoOkCadastroComSucesso).click();
    cy.get(selectors.tituloTelaLogin, {timeout: 15000}).should('contain', 'Vamos começar? Acesse sua conta!');
});

Cypress.Commands.add ('cadastro_nome_em_branco' , () => {
    cy.get(selectors.botaoAcessar).click({ multiple: true });
    cy.wait(1000);
    cy.get(selectors.cadastreAgoraLogin).click();
    cy.wait(1000);
    cy.get(selectors.campoNomeCadastro).click();
    cy.gerarCPFValido().then((cpf) => {
    cy.get(selectors.campoCpfCadastro).type(cpf);
    });
    cy.get(selectors.campoMaeCadastro).type(randomName2);
    cy.get(selectors.campoPaiCadastro).type(randomName3);
    cy.get(selectors.campoDtNascimentoCadastro).type(dtNascimento);
    cy.get(selectors.botaoCancelarCalendarioCadastro).click()
    cy.get(selectors.campoDtNascimentoCadastro).clear().type(dtNascimento);
    cy.get(selectors.campoEstadoResidenciaCadastro).click();
    cy.get(selectors.dropDownBahiaResidenciaCadastro).click();
    cy.get(selectors.campoCidadeResidenciaCadastro).type('Salvador');
    cy.get(selectors.dropDownSalvadorCidadeResidenciaCadastro).click();
    cy.get(selectors.mensagemCampoObrigatorioNome).should('contain', 'Este campo é obrigatório');
    // cy.get(selectors.campoNacionalidadeCadastro).click();
    // cy.wait(500);
    // cy.xpath(selectors.estrangeiroDropdownNacionalidade2).click();
    // cy.get(selectors.campoNomeCadastro).click(); 
    // cy.get(selectors.campoPassaporteCadastro).type(Cypress.env('passaporte'));
    // cy.get(selectors.campoEstadoCadastroEstrangeiro).click();
    // cy.get(selectors.dropDownBahiaResidenciaCadastro).click();
    // cy.get(selectors.campoCidadeCadastroEstrangeiro).type('Salvador');
    // cy.get(selectors.dropDownSalvadorCidadeResidenciaCadastro).click();
    cy.get(selectors.botaoAvancarAtivadoCadastro).should('be.disabled');
    // cy.get(selectors.mensagemCampoObrigatorioNome).should('contain', 'Este campo é obrigatório');
});

Cypress.Commands.add ('cadastro_cpf_em_branco' , () => {
    cy.get(selectors.botaoAcessar).click({ multiple: true });
    cy.wait(1000);
    cy.get(selectors.cadastreAgoraLogin).click();
    cy.wait(1000);
    cy.get(selectors.campoNomeCadastro).type(randomName);
    cy.get(selectors.campoCpfCadastro).click();
    cy.get(selectors.campoMaeCadastro).type(randomName2);
    cy.get(selectors.campoPaiCadastro).type(randomName3);
    cy.get(selectors.campoDtNascimentoCadastro).type(dtNascimento);
    cy.get(selectors.botaoCancelarCalendarioCadastro).click()
    cy.get(selectors.campoDtNascimentoCadastro).clear().type(dtNascimento);
    cy.get(selectors.campoEstadoResidenciaCadastro).click();
    cy.get(selectors.dropDownBahiaResidenciaCadastro).click();
    cy.get(selectors.campoCidadeResidenciaCadastro).type('Salvador');
    cy.get(selectors.dropDownSalvadorCidadeResidenciaCadastro).click();
    cy.get(selectors.mensagemCampoObrigatorioCpf).should('contain', 'Este campo é obrigatório');
});

Cypress.Commands.add ('cadastro_nome_mae_em_branco' , () => {
    cy.get(selectors.botaoAcessar).click({ multiple: true });
    cy.wait(1000);
    cy.get(selectors.cadastreAgoraLogin).click();
    cy.get(selectors.campoNomeCadastro).type(randomName);
    cy.gerarCPFValido().then((cpf) => {
    cy.get(selectors.campoCpfCadastro).type(cpf);
    });
    cy.get(selectors.campoMaeCadastro).click();
    cy.get(selectors.campoPaiCadastro).type(randomName3);
    cy.get(selectors.campoDtNascimentoCadastro).type(dtNascimento);
    cy.get(selectors.botaoCancelarCalendarioCadastro).click()
    cy.get(selectors.campoDtNascimentoCadastro).clear().type(dtNascimento);
    cy.get(selectors.campoEstadoResidenciaCadastro).click();
    cy.get(selectors.dropDownBahiaResidenciaCadastro).click();
    cy.get(selectors.campoCidadeResidenciaCadastro).type('Salvador');
    cy.get(selectors.dropDownSalvadorCidadeResidenciaCadastro).click();
    cy.get(selectors.mensagemCampoObrigatorioMae).should('contain', 'Este campo é obrigatório');
});

Cypress.Commands.add ('cadastro_estado_residencia_em_branco' , () => {
    cy.get(selectors.botaoAcessar).click({ multiple: true });
    cy.wait(1000);
    cy.get(selectors.cadastreAgoraLogin).click();
    cy.get(selectors.campoNomeCadastro).type(randomName);
    cy.gerarCPFValido().then((cpf) => {
    cy.get(selectors.campoCpfCadastro).type(cpf);
    });
    cy.get(selectors.campoMaeCadastro).type(randomName2);
    cy.get(selectors.campoPaiCadastro).type(randomName3);
    cy.get(selectors.campoDtNascimentoCadastro).type(dtNascimento);
    cy.get(selectors.botaoCancelarCalendarioCadastro).click()
    cy.get(selectors.campoDtNascimentoCadastro).clear().type(dtNascimento);
    cy.get(selectors.botaoAvancarAtivadoCadastro).should('be.disabled');
});

Cypress.Commands.add ('cadastro_cidade_residencia_em_branco' , () => {
    cy.get(selectors.botaoAcessar).click({ multiple: true });
    cy.wait(1000);
    cy.get(selectors.cadastreAgoraLogin).click();
    cy.get(selectors.campoNomeCadastro).type(randomName);
    cy.gerarCPFValido().then((cpf) => {
    cy.get(selectors.campoCpfCadastro).type(cpf);
    });
    cy.get(selectors.campoMaeCadastro).type(randomName2);
    cy.get(selectors.campoPaiCadastro).type(randomName3);
    cy.get(selectors.campoDtNascimentoCadastro).type(dtNascimento);
    cy.get(selectors.botaoCancelarCalendarioCadastro).click()
    cy.get(selectors.campoDtNascimentoCadastro).clear().type(dtNascimento);
    cy.get(selectors.campoEstadoResidenciaCadastro).click();
    cy.get(selectors.dropDownBahiaResidenciaCadastro).click();
    cy.get(selectors.botaoAvancarAtivadoCadastro).should('be.disabled');
});

Cypress.Commands.add ('cadastro_passaporte_em_branco' , () => {
    cy.get(selectors.botaoAcessar).click({ multiple: true });
    cy.wait(1000);
    cy.get(selectors.cadastreAgoraLogin).click();
    cy.wait(1000);
    cy.get(selectors.campoNacionalidadeCadastro).click();
    cy.get(selectors.estrangeiroDropDownNacionalidade).click();
    cy.get(selectors.campoNomeCadastro).type(randomName4);
    cy.get(selectors.campoPassaporteCadastro).click();
    cy.get(selectors.campoEstadoCadastroEstrangeiro).click();
    cy.get(selectors.dropDownBahiaCadastroEstrangeiro).click();
    cy.get(selectors.campoCidadeCadastroEstrangeiro).type('Salvador')
    cy.get(selectors.dropDownSalvadorCadastroEstrangeiro).click();
    cy.get(selectors.mensagemCampoObrigatorioPassaporte).should('contain', 'Este campo é obrigatório');
});

Cypress.Commands.add ('cadastro_estado_em_branco' , () => {
    cy.get(selectors.botaoAcessar).click({ multiple: true });
    cy.wait(1000);
    cy.get(selectors.cadastreAgoraLogin).click();
    cy.wait(1000);
    cy.get(selectors.campoNacionalidadeCadastro).click();
    cy.get(selectors.estrangeiroDropDownNacionalidade).click();
    cy.get(selectors.campoNomeCadastro).type(randomName4);
    cy.get(selectors.campoPassaporteCadastro).type(Cypress.env("passaporte"));
    cy.get(selectors.botaoAvancarAtivadoCadastro).should('be.disabled');
});

Cypress.Commands.add ('cadastro_cidade_em_branco' , () => {
    cy.get(selectors.botaoAcessar).click({ multiple: true });
    cy.wait(1000);
    cy.get(selectors.cadastreAgoraLogin).click();
    cy.wait(1000);
    cy.get(selectors.campoNacionalidadeCadastro).click();
    cy.get(selectors.estrangeiroDropDownNacionalidade).click();
    cy.get(selectors.campoNomeCadastro).type(randomName4);
    cy.get(selectors.campoPassaporteCadastro).type(Cypress.env("passaporte"));
    cy.get(selectors.campoEstadoCadastroEstrangeiro).click();
    cy.get(selectors.dropDownBahiaCadastroEstrangeiro).click();
    cy.get(selectors.botaoAvancarAtivadoCadastro).should('be.disabled');
});

Cypress.Commands.add ('clicar_em_entre' , () => {
    cy.get(selectors.botaoAcessar).click({ multiple: true });
    cy.wait(1000);
    cy.get(selectors.cadastreAgoraLogin).click();
    cy.wait(1000);
    cy.get(selectors.botaoEntreLogin).click();
    cy.get(selectors.tituloTelaLogin).should('contain', 'Vamos começar? Acesse sua conta!');
});

Cypress.Commands.add ('clicar_botao_X' , () => {
    cy.get(selectors.botaoAcessar).click({ multiple: true });
    cy.wait(1000);
    cy.get(selectors.cadastreAgoraLogin).click();
    cy.wait(1000);
    cy.get(selectors.botaoXcadastro).click();
    cy.get(selectors.tituloTelaLogin).should('contain', 'Vamos começar? Acesse sua conta!');
});

Cypress.Commands.add('cadastro_cpf_ja_cadastrado' , () => {
    cy.get(selectors.botaoAcessar).click({ multiple: true });
    cy.wait(1000);
    cy.get(selectors.cadastreAgoraLogin).click();
    cy.wait(1000);
    cy.get(selectors.campoNomeCadastro).type(randomName5);
    cy.get(selectors.campoCpfCadastro).type(Cypress.env("CPF"));
    cy.get(selectors.campoMaeCadastro).type(randomName6);
    cy.get(selectors.campoPaiCadastro).type(randomName7);
    cy.get(selectors.campoDtNascimentoCadastro).type(dtNascimento);
    cy.get(selectors.botaoCancelarCalendarioCadastro).click()
    cy.get(selectors.campoDtNascimentoCadastro).clear().type(dtNascimento);
    cy.get(selectors.campoEstadoResidenciaCadastro).click();
    cy.get(selectors.dropDownBahiaResidenciaCadastro).click();
    cy.get(selectors.campoCidadeResidenciaCadastro).type('Salvador');
    cy.get(selectors.dropDownSalvadorCidadeResidenciaCadastro).click();
    cy.get(selectors.botaoAvancarAtivadoCadastro).click();
    cy.get(selectors.campoEmailCadastro).type(email);
    cy.get(selectors.campoConfirmarEmailCadastro).type(email);
    cy.get(selectors.campoTelefoneCadastro).type(Cypress.env('numeroTelefone'))
    cy.get(selectors.campoCelularCadastro).type(Cypress.env('numeroCelular'));
    cy.get(selectors.botaoAvancarAtivadoCadastro).click();
    cy.get(selectors.campoSenhaAcessoCadastro).type(Cypress.env('senhaAcesso'));
    cy.get(selectors.campoConfirmarSenhaCadastro).type(Cypress.env('senhaAcesso'));
    cy.get(selectors.caixaConcordarTermosCadastro).click();
    cy.get(selectors.botaoConcluirCadastro).click();
    cy.get(selectors.mensagemCpfJaCadastrado, {timeout: 10000}).should('contain', 'CPF: Já cadastrado');
});

Cypress.Commands.add('cadastro_email_ja_cadastrado' , () => {
    cy.get(selectors.botaoAcessar).click({ multiple: true });
    cy.wait(1000);
    cy.get(selectors.cadastreAgoraLogin).click();
    cy.get(selectors.campoNomeCadastro).type(randomName8);
    cy.gerarCPFValido().then((cpf) => {
    cy.get(selectors.campoCpfCadastro).type(cpf);
});
    cy.get(selectors.campoMaeCadastro).type(randomName9);
    cy.get(selectors.campoPaiCadastro).type(randomName10);
    cy.get(selectors.campoDtNascimentoCadastro).type(dtNascimento);
    cy.get(selectors.botaoCancelarCalendarioCadastro).click()
    cy.get(selectors.campoDtNascimentoCadastro).clear().type(dtNascimento);
    cy.get(selectors.campoEstadoResidenciaCadastro).click();
    cy.get(selectors.dropDownBahiaResidenciaCadastro).click();
    cy.get(selectors.campoCidadeResidenciaCadastro).type('Salvador');
    cy.get(selectors.dropDownSalvadorCidadeResidenciaCadastro).click();
    cy.get(selectors.botaoAvancarAtivadoCadastro).click();
    cy.get(selectors.campoEmailCadastro).type(Cypress.env("email"));
    cy.get(selectors.campoConfirmarEmailCadastro).type(Cypress.env("email"));
    cy.get(selectors.campoTelefoneCadastro).type(Cypress.env('numeroTelefone'))
    cy.get(selectors.campoCelularCadastro).type(Cypress.env('numeroCelular'));
    cy.get(selectors.botaoAvancarAtivadoCadastro).click();
    cy.get(selectors.campoSenhaAcessoCadastro).type(Cypress.env('senhaAcesso'));
    cy.get(selectors.campoConfirmarSenhaCadastro).type(Cypress.env('senhaAcesso'));
    cy.get(selectors.caixaConcordarTermosCadastro).click();
    cy.get(selectors.botaoConcluirCadastro).click();
    cy.get(selectors.mensagemEmailJaCadastrado).should('contain', 'EMAIL: Já cadastrado')
});