import { useMutation } from '@tanstack/react-query';
import { Typography } from '@mui/material';
import { FormEvent, useState } from 'react';

import useAppTranslation from 'src/shared/hooks/utility/useAppTranslation';
import { NewPostFields } from '@backend/models/post/interfaces/post';
import { BaseResponse } from '@backend/shared/interfaces/api';
import AsyncButton from 'src/shared/components/buttons/async-button/AsyncButton';
import { addNewPost } from '../../fetchers/new-post';
import ImageUploader from 'src/shared/components/image-uploader/ImageUploader';

const NewPost = () => {
  const [b64Image, setB64Image] = useState<string>(null);
  const [description, setDescription] = useState('');

  const mutation = useMutation<BaseResponse, Error, {}>({
    mutationFn: ({ description, base64Img }: NewPostFields) =>
      addNewPost({ description, base64Img })
  });

  const [t] = useAppTranslation();

  const onSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    description.length > 0 &&
      mutation.mutate({ description, base64Img: b64Image });
  };

  return (
    <div className="p-4 mx-auto flex flex-col justify-center">
      <form
        className="flex flex-col justify-center self-center"
        onSubmit={onSubmitForm}
      >
        <Typography variant="h5" color="primary">
          {t('description')}
        </Typography>
        <textarea
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="custom-text-area mt-3"
        ></textarea>
        <ImageUploader
          className="self-center my-5 w-96 text-center"
          onUpload={setB64Image}
          base64Source={b64Image}
        />
        <AsyncButton
          disabled={description.length === 0 && !b64Image}
          className="mt-3"
          textKey="add-post"
        />
      </form>
    </div>
  );
};

export default NewPost;
