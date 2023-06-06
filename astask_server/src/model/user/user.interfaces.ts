export interface IUser {
  uuid: string;
  name: string;
  surname?: string;
  email: string;
  password: string;
  rol: 'admin' | 'user';
  toJSON(): object;
}
