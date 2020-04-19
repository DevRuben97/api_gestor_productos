import {Router} from 'express';


//Functions:
import {MovementsList} from '../Controllers/MovementsController';

const MovementsRoutes= Router();


MovementsRoutes.get('/Movements', MovementsList);


export default MovementsRoutes;