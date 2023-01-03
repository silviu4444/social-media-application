import { BaseResponse } from 'src/shared/interfaces/api/response';

export interface NewPostImageData {
  imageUrl: string;
}

export interface IPost {
  description: string;
  userFullName: string;
  userId: string;
  _id: string;
  imageData?: NewPostImageData;
  createdAt: string;
  updatedAt: string;
}

export interface DtoPostsCardData extends BaseResponse {
  posts: IPost[];
}
