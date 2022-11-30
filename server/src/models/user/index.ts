import mongoose from 'mongoose';

import { ModelsDefinition } from '../shared/enums/models-definition';
import { IUser } from './interfaces/user';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model<IUser>(ModelsDefinition.USER, UserSchema);
export default User;
