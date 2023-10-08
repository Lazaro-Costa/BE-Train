import {Router } from 'express';
import { CidadesController } from '../controllers/cidades';

const router = Router();

router.get('/', (_, res)=>{
  res.send('Home Site');
});
router.post('/cidades', CidadesController.createBodyValidator ,CidadesController.create);
export { router };