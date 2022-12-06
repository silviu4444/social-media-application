import mongoose from 'mongoose';

import { ModelsDefinition } from '../shared/enums/models-definition';
import { PostDocument } from './interfaces/post';

const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    description: String,
    userId: {
      type: Schema.Types.ObjectId,
      ref: ModelsDefinition.USER,
      required: true
    },
    imageData: {
      imageUrl: String,
      imageId: String,
      required: false
    }
  },
  { timestamps: true }
);

const Post = mongoose.model<PostDocument>(ModelsDefinition.POST, PostSchema);

export default Post;
