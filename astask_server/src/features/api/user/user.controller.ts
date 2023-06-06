import { Request, Response } from 'express';
import { handleHttp } from '../../../utils/error.handle';
import userService from './user.service';

const login = async (req: Request, res: Response) => {
  try {
    let { body } = req;
    const user = await userService.insertUser(body);
    res.json({
      status: 'success',
      data: user,
    });
  } catch (err) {
    handleHttp(res, 'ERROR_POST_USER', err);
  }
};

const postUser = async (req: Request, res: Response) => {
  try {
    let { body } = req;
    const user = await userService.insertUser(body);
    res.json({
      status: 'success',
      data: user,
    });
  } catch (err) {
    handleHttp(res, 'ERROR_POST_USER', err);
  }
};

const getUsers = async (_req: Request, res: Response) => {
  try {
    const user = await userService.getUsersFilter();
    res.json({
      status: 'success',
      total: user.length,
      data: user,
    });
  } catch (err) {
    handleHttp(res, 'ERROR_GET_USERS', err);
  }
};

const getUser = async (_req: Request, res: Response) => {
  try {
    let { user } = res.locals;
    res.json({
      status: 'success',
      data: user,
    });
  } catch (err) {
    handleHttp(res, 'ERROR_GET_USER', err);
  }
};

const putUser = async (req: Request, res: Response) => {
  try {
    let { uuid } = res.locals.user;
    let { body } = req;
    const user = await userService.updateUser(uuid, body);
    res.json({
      status: 'success',
      data: user,
    });
  } catch (err) {
    handleHttp(res, 'ERROR_UPDATE_USER', err);
  }
};

const deleteUser = async (_req: Request, res: Response) => {
  try {
    let { uuid } = res.locals.user;
    const user = await userService.deleteUser(uuid);
    res.json({
      status: 'success',
      data: user,
    });
  } catch (err) {
    handleHttp(res, 'ERROR_DELETE_USER', err);
  }
};

export default { getUser, getUsers, postUser, putUser, deleteUser };
