import { Request, RequestHandler, Response } from 'express';
import * as yup from 'yup';
import { StatusCodes } from 'http-status-codes';

interface ICidade{
  nome:string;
  estado:string;
}
const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
  nome: yup.string().required().min(3),
  estado: yup.string().required().min(3),
});

export const createBodyValidator: RequestHandler = (req, res, next)=>{
  try{
    bodyValidation.validateSync(req.body, { abortEarly: false });
    return next();
  }catch(err){
    const yupError = err as yup.ValidationError;
    const errors: Record<string, string> = {};

    yupError.inner.forEach(error => {
      if(!error.path) return;
      errors[error.path] = error.message;
    });

    return res.status(StatusCodes.BAD_REQUEST).json({ errors});
  }
};

export const create = (req: Request<{}, {}, ICidade>, res: Response) => {
  
  
  return res.status(StatusCodes.CREATED).send(req.body);
};