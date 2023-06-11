const Boom = require('boom');
import { Request, Response, NextFunction } from 'express';
import itemService from './item.service';
import projectService from '../project/project.service';

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

const loadProjectId = async (req: Request, res: Response, next: NextFunction) => {
    let projectId;
    if (req.params.projectId) {
        projectId = req.params.projectId;
    }
  
    if (req.body.projectId) {
        projectId = req.body.projectId;
    }
  
    if (!projectId) {
      return next(
        Boom.badData('The Uuid is required', {
          code: `${MODEL}.UUID_REQUIRED`,
        }),
      );
    }
  
    let project;
    try {
        project = await projectService.getProject(projectId);
    } catch (error) {
      return next(Boom.notFound(`Project not found`, { code: `PROJECT.NOT_FOUND` }));
    }
  
    if (!project) return next(Boom.notFound(`Project not found`, { code: `PROJECT.NOT_FOUND` }));
  
    res.locals.project = project;
  
    next();
  };
export default { loadItem,loadProjectId };
