export interface IItem {
  uuid: string;
  name: string;
  description: string;
  project_uuid: string;
  status: 'done' | 'new';
  toJSON(): object;
}
