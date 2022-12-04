import { PROFILE_RESPONSE_MESSAGES } from '../../../controllers/profile/constants/profile-responses';
import DEFAULT_RESPONSE_MESSAGES from '../../../controllers/shared/constants/response-messages';
import {
  ImageKitFolders,
  SUPPORTED_IMAGES_FORMAT
} from '../constants/imageKit.constants';
import { imageKit } from '../imageKit';

export async function storeImage(
  base64EncodedImage: string,
  fileName: string,
  folder: ImageKitFolders
) {
  const fileType = base64EncodedImage.slice(
    base64EncodedImage.indexOf('/') + 1,
    base64EncodedImage.indexOf(';')
  );
  if (!SUPPORTED_IMAGES_FORMAT.includes(fileType))
    throw new Error(DEFAULT_RESPONSE_MESSAGES.DATA_FORMAT_NOT_SUPPORTED);

  try {
    const imageData = await imageKit.upload({
      file: base64EncodedImage,
      fileName: fileName,
      folder: folder
    });
    return imageData;
  } catch (_) {
    throw new Error(PROFILE_RESPONSE_MESSAGES.SAVING_THE_IMAGE_HAS_FAILED);
  }
}
