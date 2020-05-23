import {Router} from 'express';


//Functions:
import {
    MovementsList,
    getMovementTypes,
    NewMovement
} from '../Controllers/MovementsController';

const MovementsRoutes= Router();


MovementsRoutes.get('/', MovementsList);
MovementsRoutes.get('/Types/',getMovementTypes);
MovementsRoutes.post('/',NewMovement);


export default MovementsRoutes;