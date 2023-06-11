import { Router } from 'express';

import userRouter from './user/user.router';
import userProtectedRouter from './user/user.protected.router';
import projectProtectedRouter from './project/project.protected.router';


const router: Router = Router();

router.use(`/user`, userRouter);
router.use(`/user-s`, userProtectedRouter);

router.use(`/project-s`, projectProtectedRouter);



export { router };
