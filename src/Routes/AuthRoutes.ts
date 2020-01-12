import {Router} from 'express';
const AuthRoutes= Router();

import {Login} from '../Controllers/AuthController';

AuthRoutes.post('/Auth/login',Login);

export default AuthRoutes;