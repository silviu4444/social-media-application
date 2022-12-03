import mongoose from 'mongoose';

import { ModelsDefinition } from '../shared/enums/models-definition';
import User from '../user';
import { IPost } from './interfaces/post';

const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    description: String,
    userId: {
      type: Schema.Types.ObjectId,
      ref: ModelsDefinition.USER,
      required: true
    }
  },
  { timestamps: true }
);

const Post = mongoose.model<IPost>(ModelsDefinition.POST, PostSchema);

export default Post;
