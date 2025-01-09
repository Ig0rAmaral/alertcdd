const gerarCPF = require('gerar-cpf');

Cypress.Commands.add('gerarCPFValido', () => {
    const cpf = gerarCPF();
    return cpf;
  });

