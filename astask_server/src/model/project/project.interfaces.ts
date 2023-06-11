export interface IProject {
  uuid: string;
  name: string;
  description?: string;
  userId: string;
  toJSON(): object;
}
