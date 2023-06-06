import mongoose from 'mongoose';
import { ulid } from 'ulid'

import { IUser } from './user.interfaces';

const userSchema = new mongoose.Schema<IUser>(
  {
    uuid: {
      type: String,
      required: true,
      default: () => ulid(),
    },
    name: { type: String, required: true },
    surname: { type: String, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true },
    rol: { type: String, required: false, enum: ['admin', 'user'], default: 'user' },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

userSchema.set('toJSON', {
  transform: (_doc, user) => {
    delete user._id;
    delete user.__v;
    delete user.createdAt;
    delete user.updatedAt;

    return user;
  },
});

userSchema.methods.toJSON = function () {
  const userObject = this.toObject();
  delete userObject._id;
  delete userObject.__v;
  delete userObject.createdAt;
  delete userObject.updatedAt;
  return userObject;
};

export default mongoose.model<IUser>('User', userSchema);
