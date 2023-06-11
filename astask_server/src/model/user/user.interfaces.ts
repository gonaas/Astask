import { Document } from 'mongoose';

export interface IUser extends Document {
  uuid: string;
  name: string;
  surname?: string;
  email: string;
  password: string;
  rol: 'admin' | 'user';
  toJSON(): object;
  validPassword: (password: string) => boolean;
  toAuthJSON: () => { token: string };
}
