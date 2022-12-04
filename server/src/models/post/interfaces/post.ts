import { Document } from 'mongoose';

export interface NewPostFields {
  description: string;
  base64Img: string;
}

export interface NewPostImageData {
  imageUrl: string;
  imageId: string;
}

export interface IPost extends Document {
  description: string;
  userId: Object;
  imageData?: NewPostImageData;
}
