export interface IItem {
    uuid: string;
    name: string;
    description: string;
    project_uuid: string;
    toJSON(): object;
}
  