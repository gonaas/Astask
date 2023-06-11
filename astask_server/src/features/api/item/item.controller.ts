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

const getItems = async (req: Request, res: Response) => {
  try {
    let { uuid } = req.params;

    console.log('uuid: ', uuid);

    const item = await itemService.getItemsFilter(uuid);
    res.json({
      status: 'success',
      total: item.length,
      data: item,
    });
  } catch (err) {
    handleHttp(res, 'ERROR_GET_ITEMS', err);
  }
};

const listItem = async (_req: Request, res: Response) => {
  try {
    const item = await itemService.getItemsFilter({});

    res.json({
      status: 'success',
      total: item.length,
      data: item,
    });
  } catch (err) {
    handleHttp(res, 'ERROR_GET_ITEM', err);
  }
};

const changeStatus = async (req: Request, res: Response) => {
  try {
    let token = req.headers.token;
    if (!token) {
      res.json({
        status: 'failed',
        msg: 'no token provided',
      });
    }

    let { item_uuid } = req.body;

    let newItem = await itemService.changeItemStatus(item_uuid);

    res.json({
      status: 'success',
      data: newItem,
    });
  } catch (err) {
    handleHttp(res, 'ERROR_UPDATE_ITEM', err);
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

export default { changeStatus, listItem, getItems, postItem, putItem, deleteItem };
