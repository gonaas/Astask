export interface IProject {
  uuid: string;
  name: string;
  description?: string;
  user_uuid: string;
  toJSON(): object;
}
