import { IPostDocument, PostDocument } from './../../post/interfaces/post';
import { Document, Model, ObjectId } from 'mongoose';

export interface IUserPost extends Document {
  postId: ObjectId;
}

export interface IUser extends Document {
  fullName: string;
  email: string;
  password: string;
  posts: IUserPost[];
  addNewPost: (post: PostDocument) => Promise<IUser>;
}

export interface UserModel extends Model<IUser> {
  getAllPosts: (userId: ObjectId) => Promise<IPostDocument[]>;
}
