import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';
import { expect } from '@jest/globals'; // ou import { expect } from 'jest';

describe('Cidades - GetById', () => {
  it('Busca registro por id', async () => {

    const res1 = await testServer
      .post('/cidades')
      .send({ nome: 'Caxias do sul' });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resBuscada = await testServer
      .get(`/cidades/${res1.body}`)
      .send();

    expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
    expect(resBuscada.body).toHaveProperty('nome');
  });
  it('Tenta buscar um registro que nao existe', async () => {
    const res1 = await testServer
      .get('/cidades/999')
      .send();
    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty('errors.default');
  });
});