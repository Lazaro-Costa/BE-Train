import { Request, Response } from 'express';
import * as yup from 'yup';
import { StatusCodes } from 'http-status-codes';
import { validation } from '../../shared/middleware';
import { CidadesProvider } from '../../database/providers/cidades';

interface IParamProps{
  id?: number;
}

export const deleteByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamProps>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0),
  }))
}));

export const deleteById = async (req: Request<IParamProps>, res: Response) => {
  const {id} = req.params;
  if(id){
    const result = await CidadesProvider.deleteById(Number(id)); 
    if(result instanceof Error) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ errors: { default: result.message } });
    return res.status(StatusCodes.NO_CONTENT).send();

  }else{
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: 'O parâmetro "ID" precisa ser informado.'
      }
    })
  }
};