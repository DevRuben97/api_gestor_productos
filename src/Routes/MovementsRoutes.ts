import {Router} from 'express';


//Functions:
import {
    MovementsList,
    getMovementTypes,
    NewMovement,
    getMovementById,
    editMovement
} from '../Controllers/MovementsController';

const MovementsRoutes= Router();


MovementsRoutes.get('/', MovementsList);
MovementsRoutes.get('/Types/',getMovementTypes);
MovementsRoutes.get('/:id', getMovementById);
MovementsRoutes.post('/',NewMovement);
MovementsRoutes.put('/', editMovement);


export default MovementsRoutes;