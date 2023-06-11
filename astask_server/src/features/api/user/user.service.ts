import User from '../../../model/user/user.model';
import { IUser } from '../../../model/user/user.interfaces';

const toPublic = (user: IUser) => user.toJSON();

const insertUser = async (data: IUser): Promise<IUser> => {
  const user = new User(data);
  return await user.save();
};

const getUsersFilter = async (data: IUser | any): Promise<IUser[]> => {
  const users = await User.where(data).setOptions({ sanitizeFilter: false });
  return users;
};

const getUserFilter = async (data: IUser | any)  => {
  const user = await User.findOne(data).setOptions({ sanitizeFilter: false });
  return user;
};

const getUser = async (uuid: string) => {
  const user = await User.findOne({
    uuid: uuid,
  }).setOptions({ sanitizeFilter: false });
  return user;
};

const updateUser = async (uuid: string, data: IUser) => {
  const user = await User.findOneAndUpdate(
    {
      uuid: uuid,
    },
    data,
    {
      new: true,
    },
  );
  return user;
};

const deleteUser = async (uuid: string)=> {
  const user = await User.deleteOne(
    {
      uuid: uuid,
    }
  );
  return user;
};

export default { toPublic, insertUser, getUsersFilter, getUserFilter, getUser, updateUser, deleteUser };

