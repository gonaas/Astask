const Boom = require('boom');
import { Request, Response, NextFunction } from 'express';
import itemService from './item.service';

const MODEL = 'Item'

const loadItem = async (req: Request, res: Response, next: NextFunction) => {
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

  let item;
  try {
    item = await itemService.getItem(uuid);
  } catch (error) {
    return next(Boom.notFound(`${MODEL} not found`, { code: `${MODEL}.NOT_FOUND` }));
  }

  if (!item) return next(Boom.notFound(`${MODEL} not found`, { code: `${MODEL}.NOT_FOUND` }));

  res.locals.item = item;

  next();
};

export default { loadItem };
