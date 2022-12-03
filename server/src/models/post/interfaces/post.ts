import { Document } from 'mongoose';

export interface NewPostFields {
  description: string;
}

export interface IPost extends Document {
  description: string;
}
