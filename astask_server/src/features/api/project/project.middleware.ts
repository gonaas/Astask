const Boom = require('boom');
import { Request, Response, NextFunction } from 'express';
import projectService from './project.service';

const MODEL = 'Project'

const loadProject = async (req: Request, res: Response, next: NextFunction) => {
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

  let project;
  try {
    project = await projectService.getProject(uuid);
  } catch (error) {
    return next(Boom.notFound(`${MODEL} not found`, { code: `${MODEL}.NOT_FOUND` }));
  }

  if (!project) return next(Boom.notFound(`${MODEL} not found`, { code: `${MODEL}.NOT_FOUND` }));

  res.locals.project = project;

  next();
};

export default { loadProject };
