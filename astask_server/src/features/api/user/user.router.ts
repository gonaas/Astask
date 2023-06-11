import { Router } from 'express';
import userController from './user.controller';
import userMiddleware from './user.middleware';

const router: Router = Router();

router.post('/login', userMiddleware.loadUserByEmail, userController.login);

router.get('/', userController.getUser);

export default router;
