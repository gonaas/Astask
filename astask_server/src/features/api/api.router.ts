import { Router } from 'express';

import userRouter from './user/user.router';
import userProtectedRouter from './user/user.protected.router';

const router: Router = Router();

router.use(`/user`, userRouter);
router.use(`/user-s`, userProtectedRouter);


export { router };
