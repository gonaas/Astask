export interface IItem {
    uuid: string;
    name: string;
    description: string;
    projectId: string;
    toJSON(): object;
}
  