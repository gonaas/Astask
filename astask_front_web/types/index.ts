export interface IProject {
  uuid: string;
  name: string;
  description?: string;
}

export interface IItem {
  uuid: string;
  project_uuid: string;
  name: string;
  description?: string;
  status: "new" | "done"
}