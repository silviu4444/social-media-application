import { ImageKitFolders } from '../../../lib/imageKit/constants/imageKit.constants';
import { storeImage } from '../../../lib/imageKit/utility/utility';
import Post from '../../../models/post';
import { NewPostImageData } from '../../../models/post/interfaces/post';
import { IUser } from '../../../models/user/interfaces/user';
import POST_RESPONSE_MESSAGES from '../../post/constants/post.responses';

export async function addNewPost(
  description: string,
  User: IUser,
  imageData: NewPostImageData = null
) {
  const post = new Post({ description, userId: User, imageData });
  return post
    .save()
    .then((post) => User.addNewPost(post))
    .catch((error) => {
      throw new Error(POST_RESPONSE_MESSAGES.SOMETHING_WENT_WRONG);
    });
}

export async function storeImageAndAddNewPost(
  base64Img: string,
  description: string,
  User: IUser
) {
  try {
    const { url, fileId: imageId } = await storeImage(
      base64Img,
      `POST_IMAGE_${new Date().toISOString()}`,
      ImageKitFolders.POSTS
    );

    const imageData: NewPostImageData = { imageUrl: url, imageId };

    return addNewPost(description, User, imageData);
  } catch ({ message }) {
    throw new Error(message);
  }
}
