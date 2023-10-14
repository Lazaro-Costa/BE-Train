import { Request, Response } from 'express';
import * as yup from 'yup';
import { StatusCodes } from 'http-status-codes';
import { validation } from '../../shared/middleware';
import { ICidade } from '../../database/models';
import { CidadesProvider } from '../../database/providers/cidades';

interface IParamProps{
  id?: number;
}
interface IBodyProps extends Omit<ICidade, 'id'>{}

export const updateByIdValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(yup.object().shape({
    nome: yup.string().required().min(3),
  })),
  params: getSchema<IParamProps>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0),
  }))
}));

export const updateById = async (req: Request<IParamProps, {}, IBodyProps>, res: Response) => {
  const { id } = req.params;
  const { nome } = req.body;
  
  if(id && nome){
    const response = await CidadesProvider.updateById(Number(id), nome);
    if(response instanceof Error) return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ errors: { default: response.message } });
    return res.status(StatusCodes.NO_CONTENT).send();

  }else{
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: 'O parâmetro "ID" precisa ser informado.'
      }
    })
  }
};