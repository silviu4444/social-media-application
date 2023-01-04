import { Document } from 'mongoose';
import { MongooseTimestamps } from '../../../shared/interfaces/mongoose';

export interface NewPostFields {
  description: string;
  base64Img: string;
}

export interface NewPostImageData {
  imageUrl: string;
  imageId: string;
}

export interface PostDocumentObject extends MongooseTimestamps {
  description: string;
  userId: Object;
  imageData?: NewPostImageData;
}

export interface PostDocument extends Document, PostDocumentObject {}

export interface FEPostDocument extends Omit<PostDocumentObject, 'imageData'> {
  userFullName: string;
  postImage: string;
}
