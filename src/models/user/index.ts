import mongoose, { ObjectId } from 'mongoose';
import { PostDocument } from '../post/interfaces/post';

import { ModelsDefinition } from '../shared/enums/models-definition';
import { IUser, UserModel } from './interfaces/user';

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

UserSchema.statics.getAllPosts = async function (userId: ObjectId) {
  const user: IUser = await this.findById(userId);
  const userWithPopulatedPosts = await user.populate<PostDocument[]>(
    'posts.postId'
  );
  return userWithPopulatedPosts.posts.map((post) => {
    const postData: PostDocument = (post.postId as any)._doc;
    return {
      ...(post.postId as any)._doc,
      userFullName: user.fullName,
      imageData: {
        imageUrl: postData.imageData?.imageUrl
      }
    };
  });
};

UserSchema.methods.addNewPost = function (post: PostDocument) {
  this.posts.push({ postId: post._id });
  return this.save();
};

const User = mongoose.model<IUser, UserModel>(
  ModelsDefinition.USER,
  UserSchema
);
export default User;
