export interface IItem {
    uuid: string;
    name: string;
    description: string;
    project_id: string;
    toJSON(): object;
}
  