import mongoose from 'mongoose';
import { ulid } from 'ulid';

import { IItem } from './item.interfaces';

const itemSchema = new mongoose.Schema<IItem>(
  {
    uuid: {
      type: String,
      required: true,
      default: () => ulid(),
    },
    name: { type: String },
    description: { type: String },
    project_uuid: { type: String, required: true },
    status: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

itemSchema.set('toJSON', {
  transform: (_doc, project) => {
    delete project._id;
    delete project.__v;
    delete project.createdAt;
    delete project.updatedAt;

    return project;
  },
});

itemSchema.methods.toJSON = function () {
  const projectObject = this.toObject();
  delete projectObject._id;
  delete projectObject.__v;
  delete projectObject.createdAt;
  delete projectObject.updatedAt;
  return projectObject;
};

export default mongoose.model<IItem>('item', itemSchema);
