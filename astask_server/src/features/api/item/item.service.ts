import Item from '../../../model/item/item.model';
import { IItem } from '../../../model/item/item.interfaces';

const toPublic = (item: IItem) => item.toJSON();

const insertItem = async (data: IItem): Promise<IItem> => {
  const item = new Item(data);
  return await item.save();
};

const getItemsFilter = async (uuid: any): Promise<IItem[]> => {
  console.log('id es: ', uuid);
  let items = await Item.find({ project_uuid: uuid });
  return items;
};

const getItemFilter = async (data: IItem | any) => {
  const item = await Item.findOne(data).setOptions({ sanitizeFilter: false });
  return item;
};

const getItem = async (uuid: string) => {
  const item = await Item.findOne({
    uuid: uuid,
  }).setOptions({ sanitizeFilter: false });
  return item;
};

const updateItem = async (uuid: string, data: IItem) => {
  const item = await Item.findOneAndUpdate(
    {
      uuid: uuid,
    },
    data,
    {
      new: true,
    },
  );
  return item;
};

const changeItemStatus = async (uuid: string) => {
  const oldItem: any = await Item.findOne({ uuid: uuid });
  let oldStatus: 'new' | 'done' = oldItem.status;

  const item = await Item.findOneAndUpdate(
    {
      uuid: uuid,
    },
    {
      $set: { status: oldStatus === 'done' ? 'new' : 'done' },
    },
    {
      new: true,
    },
  );
  return item;
};

const deleteItem = async (uuid: string) => {
  const item = await Item.deleteOne({
    uuid: uuid,
  });
  return item;
};

export default {
  toPublic,
  insertItem,
  getItemsFilter,
  getItemFilter,
  getItem,
  updateItem,
  deleteItem,
  changeItemStatus,
};
