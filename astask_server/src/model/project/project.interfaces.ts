export interface IProject {
  uuid: string;
  name: string;
  description?: string;
  toJSON(): object;
}
