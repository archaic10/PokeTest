import { Router } from 'express'; 
import { PokeController } from './controllers/PokeController';

const router = Router();

const pokeController = new PokeController();

router.post("/api/v1/Attack", pokeController.attack);

export {router};