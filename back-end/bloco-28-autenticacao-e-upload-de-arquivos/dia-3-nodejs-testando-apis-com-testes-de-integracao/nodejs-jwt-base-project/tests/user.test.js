const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoConnection = require('../models/connection');

const server = require('../api/app');

chai.use(chaiHttp);

const { expect } = chai;

describe('Teste para rota GET /api/users/:userId', () => {
  describe('quando não é passado o token na requisição', () => {
    let response = {};

    const ID_EXAMPLE = '6140f370bb9c235eb7af7ea1';

    before(async () => {
      response = await chai.request(server)
        .get(`/api/users/${ID_EXAMPLE}`);
    });

    it('retorna uma resposta com o código 404 - Not Found', () => {
      expect(response).to.have.status(404);
    });

    it('body da response possui a mensagem', () => {
      expect(response.body).to.have.property('message');
    });

    it('o conteúdo da mensagem é "Token não encontrado ou informado"', () => {
      expect(response.body.message).to.be.equal('Token não encontrado ou informado');
    });
  });

  describe('quando o ID vindo do parâmetro é diferente do ID armazenado no token', () => {
    let response = {};

    const WRONG_ID = '9990f370bb9c235eb7af7ea1';
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjYxNDBmMzcwYmI5YzIzNWViN2FmN2VhMSIsInVzZXJuYW1lIjoibWljayIsInBhc3Nzd29yZCI6Im1pbmhhc2VuaGEifQ.CIfmY1QDKt1Bo-NmDufNREvhnopUbaCmhn1eYVScJCs';

    before(async () => {
      response = await chai.request(server)
        .get(`/api/users/${WRONG_ID}`)
        .set('Authorization', token);
    });

    it('retorna uma resposta com o código 401 - Unauthorized', () => {
      expect(response).to.have.status(401);
    });

    it('body possui uma mensagem', () => {
      expect(response.body).to.have.property('message');
    });

    it('o conteúdo da mensagem é "Acesso negado"', () => {
      expect(response.body.message).to.be.equal('Acesso negado');
    });
  });

  describe('quando o ID vindo do parâmetro é igual o ID armazenado no token', () => {
    let response = {};
    let connectionMock;
    const DBServer = new MongoMemoryServer();

    const RIGHT_ID = '6140f370bb9c235eb7af7ea1';
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDBmMzcwYmI5YzIzNWViN2FmN2VhMSIsInVzZXJuYW1lIjoibWljayIsInBhc3Nzd29yZCI6Im1pbmhhc2VuaGEifQ.mzVi1KslHU6iULvX0gsc5wsbcME0HWY1lXdJQj1GIAQ';

    before(async () => {
      const URLMock = await DBServer.getUri();

      connectionMock = await MongoClient
        .connect(URLMock, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
        .then((conn) => conn.db('jwt_exercise'));

      sinon.stub(mongoConnection, 'connection').resolves(connectionMock);

      await connectionMock.collection('users').insertOne({
        "_id": "6140f370bb9c235eb7af7ea1",
        "username": "mick",
        "passsword": "minhasenha"
      });

      response = await chai.request(server)
      .get(`/api/users/${RIGHT_ID}`)
      .set('Authorization', token);
    });

    it('retorna uma resposta com o status 200 - OK', () => {
      expect(response).to.have.status(200);
    });

    it('o dados da pessoa devem estar em "response.userData"', () => {
      expect(response.body.userData).to.have.keys('_id', 'username', 'password');
    });

  });
});