import {Router } from 'express';
import {StatusCodes} from 'http-status-codes';
const router = Router();
router.get('/', (_, res)=>{
  res.send('Home Site');
});
router.post('/teste/:id', (req, res)=>{
  const {id} = req.params;
  const obj = {
    recebido: req.body.nome,
    id
  };
  return res.status(StatusCodes.OK).json(obj);
});
export { router };