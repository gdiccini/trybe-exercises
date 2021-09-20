const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../api/app');

chai.use(chaiHttp);

const { expect } = chai;

describe('Teste para rota GET /api/users/:userId', () => {
  describe('quando não é passado o token na requisição', () => {
    let response = {};

    const ID_EXAMPLE = '6140f370bb9c235eb7af7ea1';

    before(async () => {
      response = await chai.request(server)
        .get(`/api/users/${ID_EXAMPLE}`)
        .send({});
    });

    it('retorna uma resposta com o código 404 - Not Found', () => {
      expect(response).to.have.status(404);
    });

    it('body da response possui a mensagem', () => {
      expect(response.body).to.have.property('message')
    });

    it('o conteúdo da mensagem é "Token não encontrado ou informado"', () => {
      expect(response.body.message).to.be.equal('Token não encontrado ou informado');
    });
  });
});