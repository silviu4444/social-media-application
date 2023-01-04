import { BaseResponse } from 'src/shared/interfaces/api/response';

export interface NewPostImageData {
  imageUrl: string;
}

export interface IPost {
  _id: string;
  createdAt: string;
  description: string;
  postImage: string;
  updatedAt: string;
  userFullName: string;
  userId: string;
}

export interface DtoPostsCardData extends BaseResponse {
  posts: IPost[];
}
