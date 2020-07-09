import {Router} from 'express';


//Functions:
import {
    MovementsList,
    getMovementTypes,
    NewMovement,
    getMovementById,
    editMovement,
    wareHouseMovements
} from '../Controllers/MovementsController';

const MovementsRoutes= Router();


MovementsRoutes.get('/', MovementsList);
MovementsRoutes.get('/Types/',getMovementTypes);
MovementsRoutes.get('/:id', getMovementById);
MovementsRoutes.post('/',NewMovement);
MovementsRoutes.put('/', editMovement);
MovementsRoutes.get('/WaraHouse/:0',wareHouseMovements);


export default MovementsRoutes;