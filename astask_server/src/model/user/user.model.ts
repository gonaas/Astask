import mongoose from 'mongoose';
import { ulid } from 'ulid';
import bcrypt from 'bcrypt';
import jwt from '../../utils/jwt'
import { IUser } from './user.interfaces';

const userSchema = new mongoose.Schema<IUser>(
  {
    uuid: {
      type: String,
      required: true,
      default: () => ulid(),
    },
    name: { type: String, required: true, trim: true },
    surname: { type: String, required: false, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
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

userSchema.methods.validPassword = function (password: string): boolean {
  return bcrypt.compareSync(password, this.password);
};

userSchema.pre<IUser>('save', function (next) {
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
  }
  next();
});

userSchema.methods.toAuthJSON = function (): { token: string } {
  let user: { token: string } = { token: '' };

  user.token = jwt.generateJWT(
    {
      uuid: this.uuid,
      type: 'user',
      createdAt: new Date(),
    }
  );

  return user;
};

export default mongoose.model<IUser>('User', userSchema);
