import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Cidades - GetAll', () => {
  it('Get All Registers', async () => {
    const res1 = await testServer
      .post('/cidades')
      .send({ nome: 'Caxias do Sul' });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    
    const resCriada = await testServer
      .get('/cidades')
      .send();
    expect(Number(resCriada.header['x-total-count'])).toBeGreaterThan(0);
    expect(resCriada.statusCode).toEqual(StatusCodes.OK);
    expect(resCriada.body.length).toBeGreaterThan(0);
  });
});