const Boom = require('boom');
import { Request, Response, NextFunction } from 'express';
import userService from './user.service';

const MODEL = 'User'

const loadUser = async (req: Request, res: Response, next: NextFunction) => {
  let uuid;
  if (req.params.uuid) {
    uuid = req.params.uuid;
  }

  if (req.body.uuid) {
    uuid = req.body.uuid;
  }

  if (!uuid) {
    return next(
      Boom.badData('The Uuid is required', {
        code: `${MODEL}.UUID_REQUIRED`,
      }),
    );
  }

  let user;
  try {
    user = await userService.getUser(uuid);
  } catch (error) {
    return next(Boom.notFound(`${MODEL} not found`, { code: `${MODEL}.NOT_FOUND` }));
  }

  if (!user) return next(Boom.notFound(`${MODEL} not found`, { code: `${MODEL}.NOT_FOUND` }));

  res.locals.user = user;

  next();
};

const loadUserByEmail = async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;
  if (!email) {
    return next(Boom.badData('The email is required', { code: 'USER.EMAIL_REQUIRED' }));
  }
  const user = await userService.getUserFilter({ email });
  if (!user) {
    return next(Boom.badData('user not found', { code: 'NOT_FOUND' }));
  }
  res.locals.user = user;

  next();
};


export default { loadUser,loadUserByEmail };
