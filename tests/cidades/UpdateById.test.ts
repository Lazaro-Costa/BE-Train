import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';
import { expect } from '@jest/globals'; // ou import { expect } from 'jest';

describe('Cidades - UpdateById', () => {
  it('Atualiza um registro', async () => {
    const res1 = await testServer
      .post('/cidades/')
      .send({ nome: 'Caxias do Sul' });
    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const atualiza = await testServer
      .put(`/cidades/${res1.body}`)
      .send({nome: 'Rio das Jardas'});
    expect(atualiza.statusCode).toEqual(StatusCodes.NO_CONTENT);
  }); it('Tenta atualizar um registro que não existe', async () => {

    const atualiza = await testServer
      .put('/cidades/999')
      .send({nome: 'Resgitro que nao deve existir'});
    expect(atualiza.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(atualiza.body).toHaveProperty('errors.default');
  });
});