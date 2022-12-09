import { Document } from 'mongoose';

export interface NewPostFields {
  description: string;
  base64Img: string;
}

export interface NewPostImageData {
  imageUrl: string;
  imageId: string;
}

export interface PostDocument extends Document {
  description: string;
  userId: Object;
  imageData?: NewPostImageData;
}
