import { Router } from 'express';
import userController from './user.controller';
import userMiddleware from './user.middleware';;


const router: Router = Router();

router.get('/:uuid',userMiddleware.loadUser, userController.getUser);

router.get('/', userController.getUsers);

router.post('/', userController.postUser);

router.put('/:uuid',userMiddleware.loadUser, userController.putUser);

router.delete('/:uuid',userMiddleware.loadUser, userController.deleteUser);

export default router;
