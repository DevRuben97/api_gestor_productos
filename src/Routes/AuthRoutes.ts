import {Router} from 'express';
const AuthRoutes= Router();

import {
    Login,
    GetUserProfile

} from '../Controllers/AuthController';

AuthRoutes.post('/Auth/login',Login);
AuthRoutes.get('/Auth/UserProfile/:id', GetUserProfile)

export default AuthRoutes;