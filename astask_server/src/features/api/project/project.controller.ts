import { Request, Response } from 'express';
import { handleHttp } from '../../../utils/error.handle';
import projectService from './project.service';
import jwtUtils from '../../../utils/jwt';

const postProject = async (req: Request, res: Response) => {
  try {
    let { body } = req;
    const project = await projectService.insertProject(body);
    res.json({
      status: 'success',
      data: project,
    });
  } catch (err) {
    handleHttp(res, 'ERROR_POST_PROJECT', err);
  }
};

const getProjects = async (req: Request, res: Response) => {
  try {
    let { token } = req.headers as any;
    let uuid = jwtUtils.parseJwt(token);

    const project = await projectService.getProjectsFilter({ user_uuid: uuid });

    res.json({
      status: 'success',
      total: project.length,
      data: project,
    });
  } catch (err) {
    handleHttp(res, 'ERROR_GET_PROJECTS', err);
  }
};

const getProject = async (_req: Request, res: Response) => {
  try {
    let { project } = res.locals;
    res.json({
      status: 'success',
      data: project,
    });
  } catch (err) {
    handleHttp(res, 'ERROR_GET_PROJECT', err);
  }
};

const putProject = async (req: Request, res: Response) => {
  try {
    let { uuid } = res.locals.project;
    let { body } = req;
    const project = await projectService.updateProject(uuid, body);
    res.json({
      status: 'success',
      data: project,
    });
  } catch (err) {
    handleHttp(res, 'ERROR_PUT_PROJECT', err);
  }
};

const deleteProject = async (_req: Request, res: Response) => {
  try {
    let { uuid } = res.locals.project;
    const project = await projectService.deleteProject(uuid);
    res.json({
      status: 'success',
      data: project,
    });
  } catch (err) {
    handleHttp(res, 'ERROR_DELETE_PROJECT', err);
  }
};

export default { postProject, getProjects, getProject, putProject, deleteProject };
