import {Router } from 'express';
// import {StatusCodes} from 'http-status-codes';
import { CidadesController } from '../controllers/cidades';

const router = Router();

router.get('/', (_, res)=>{
  res.send('Home Site');
});
router.post('/cidades', CidadesController.create);
export { router };