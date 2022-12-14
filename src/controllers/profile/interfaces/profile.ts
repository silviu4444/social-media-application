import { FEPostDocument } from '../../../models/post/interfaces/post';
import { BaseResponse } from './../../../shared/interfaces/api';

export interface getProfilePostsResponse extends BaseResponse {
  posts: FEPostDocument[];
}

