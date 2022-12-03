import { IPost } from './../../post/interfaces/post';
import { Document } from 'mongoose';

export interface IUser extends Document {
  fullName: string;
  email: string;
  password: string;
  posts: IPost[];
  addNewPost: (post: IPost) => Promise<IUser>;
  getAllPosts: () => Promise<IPost[]>;
}
