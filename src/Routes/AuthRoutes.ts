import {Router} from 'express';
const AuthRoutes= Router();

import {
    Login,
    GetUserProfile

} from '../Controllers/AuthController';

AuthRoutes.post('/login/',Login);
AuthRoutes.get('/UserProfile/:id', GetUserProfile)

export default AuthRoutes;