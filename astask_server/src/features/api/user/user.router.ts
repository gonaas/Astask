import { Router } from 'express';
import userController from './user.controller';

const router: Router = Router();

router.post('/login', userController.postUser);

export default router;
