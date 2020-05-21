import {Router} from 'express';


//Functions:
import {
    MovementsList,
    getMovementTypes
} from '../Controllers/MovementsController';

const MovementsRoutes= Router();


MovementsRoutes.get('/', MovementsList);
MovementsRoutes.get('/Types/',getMovementTypes);


export default MovementsRoutes;