import mongoose from 'mongoose';
import { ulid } from 'ulid'

import { IProject } from './project.interfaces';

const projectSchema = new mongoose.Schema<IProject>(
  {
    uuid: {
      type: String,
      required: true,
      default: () => ulid(),
    },
    name: { type: String, required: true },
    description: { type: String, required: false },
    user_uuid: { type: String, required: false }
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

projectSchema.set('toJSON', {
  transform: (_doc, project) => {
    delete project._id;
    delete project.__v;
    delete project.createdAt;
    delete project.updatedAt;

    return project;
  },
});

projectSchema.methods.toJSON = function () {
  const projectObject = this.toObject();
  delete projectObject._id;
  delete projectObject.__v;
  delete projectObject.createdAt;
  delete projectObject.updatedAt;
  return projectObject;
};

export default mongoose.model<IProject>('Project', projectSchema);
