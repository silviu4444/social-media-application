import mongoose from 'mongoose';
import { IPost } from '../post/interfaces/post';

import { ModelsDefinition } from '../shared/enums/models-definition';
import { IUser } from './interfaces/user';

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    posts: [
      {
        postId: {
          type: Schema.Types.ObjectId,
          ref: ModelsDefinition.POST,
          required: true
        }
      }
    ]
  },
  { timestamps: true }
);

UserSchema.methods.getAllPosts = async function () {
  await this.populate('posts.postId');
  return this.posts;
};

UserSchema.methods.addNewPost = function (post: IPost) {
  this.posts.push({ postId: post._id });
  return this.save();
};

const User = mongoose.model<IUser>(ModelsDefinition.USER, UserSchema);
export default User;
