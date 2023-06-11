import Project from '../../../model/project/project.model';
import { IProject } from '../../../model/project/project.interfaces';

const toPublic = (project: IProject) => project.toJSON();

const insertProject = async (data: IProject): Promise<IProject> => {
  const project = new Project(data);
  return await project.save();
};

const getProjectsFilter = async (): Promise<IProject[]> => {
  const project = await Project.find().setOptions({ sanitizeFilter: false });
  return project;
};

const getProject = async (uuid: string) => {
  const project = await Project.findOne({
    uuid: uuid,
  }).setOptions({ sanitizeFilter: false });
  return project;
};

const updateProject = async (uuid: string, data: IProject) => {
  const project = await Project.findOneAndUpdate(
    {
      uuid: uuid,
    },
    data,
    {
      new: true,
    },
  );
  return project;
};

const deleteProject = async (uuid: string)=> {
  const project = await Project.deleteOne(
    {
      uuid: uuid,
    }
  );
  return project;
};

export default { toPublic, insertProject, getProjectsFilter, getProject, updateProject, deleteProject };


