import { Request, Response } from 'express';
import * as yup from 'yup';
import { StatusCodes } from 'http-status-codes';
import { validation } from '../../shared/middleware';

interface IQueryProps{
  page?: number;
  limit?: number;
  filter?: string;
}

export const getAllValidation = validation((getSchema) => ({
  query: getSchema<IQueryProps>(yup.object().shape({
    page: yup.number().moreThan(0),
    limit: yup.number().moreThan(0),
    filter: yup.string(),
  }))
}));

export const getAll = (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {
  res.setHeader('access-control-expose-headers', 'x-total-count');
  res.setHeader('x-total-count', 1);
  return res.status(StatusCodes.OK).json([
    {
      id: 1,
      nome: 'Caxias do Sul'
    }
  ]);
};