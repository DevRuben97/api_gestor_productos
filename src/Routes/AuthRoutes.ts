import {Router} from 'express';
const AuthRoutes= Router();

import {
    Login,
    UserProfile

} from '../Controllers/AuthController';

AuthRoutes.post('/Auth/login',Login);
AuthRoutes.get('/Auth/UserProfile/:id', UserProfile)

export default AuthRoutes;