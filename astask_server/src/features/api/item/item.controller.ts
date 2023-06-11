import { Request, Response } from 'express';
import { handleHttp } from '../../../utils/error.handle';
import itemService from './item.service';

const postItem = async (req: Request, res: Response) => {
  try {
    let { body } = req;
    const item = await itemService.insertItem(body);
    res.json({
      status: 'success',
      data: item,
    });
  } catch (err) {
    handleHttp(res, 'ERROR_POST_ITEM', err);
  }
};

const getItems = async (_req: Request, res: Response) => {
  try {
    let { uuid } = res.locals.project;

    const item = await itemService.getItemsFilter({project_id :uuid});
    res.json({
      status: 'success',
      total: item.length,
      data: item,
    });
  } catch (err) {
    handleHttp(res, 'ERROR_GET_ITEMS', err);
  }
};

const getItem = async (_req: Request, res: Response) => {
  try {
    let { item } = res.locals;
    res.json({
      status: 'success',
      data: item,
    });
  } catch (err) {
    handleHttp(res, 'ERROR_GET_ITEM', err);
  }
};

const putItem = async (req: Request, res: Response) => {
  try {
    let { uuid } = res.locals.item;
    let { body } = req;
    const item = await itemService.updateItem(uuid, body);
    res.json({
      status: 'success',
      data: item,
    });
  } catch (err) {
    handleHttp(res, 'ERROR_UPDATE_ITEM', err);
  }
};

const deleteItem = async (_req: Request, res: Response) => {
  try {
    let { uuid } = res.locals.item;
    const item = await itemService.deleteItem(uuid);
    res.json({
      status: 'success',
      data: item,
    });
  } catch (err) {
    handleHttp(res, 'ERROR_DELETE_ITEM', err);
  }
};

export default {getItem, getItems, postItem, putItem, deleteItem };
