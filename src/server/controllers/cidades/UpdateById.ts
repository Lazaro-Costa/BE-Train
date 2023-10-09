import { RequestHandler } from 'express';
import * as yup from 'yup';
import { StatusCodes } from 'http-status-codes';
import { validation } from '../../shared/middleware';

interface IParamProps{
  id: number;
}
interface IBodyProps{
  nome: string;
}

export const updateByIdValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(yup.object().shape({
    nome: yup.string().required().min(3),
  })),
  params: getSchema<IParamProps>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0),
  }))
}));

export const updateById : RequestHandler<
{ Params: IParamProps; Body: IBodyProps },
{},
{},
{},
Record<string, {}>
> = (req, res)=> {
  console.log(req.params);
  console.log(req.body);
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Nao implementado');
};