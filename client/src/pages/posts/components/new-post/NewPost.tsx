import { useMutation } from '@tanstack/react-query';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useAppTranslation from 'src/shared/hooks/utility/useAppTranslation';
import { NewPostFields } from '@backend/models/post/interfaces/post';
import { BaseResponse } from '@backend/shared/interfaces/api';
import { TextField } from '@mui/material';
import AsyncButton from 'src/shared/components/buttons/async-button/AsyncButton';
import { addNewPost } from '../../fetchers/new-post';

const NewPost = () => {
  const {
    register,
    getValues,
    handleSubmit,
    setError,
    setFocus,
    formState: { errors }
  } = useForm<NewPostFields>({ shouldFocusError: true });

  const mutation = useMutation<BaseResponse, Error, {}>({
    mutationFn: ({ description }: NewPostFields) => addNewPost({ description })
  });

  const [t] = useAppTranslation();

  useEffect(() => {
    setFocus('description');
  }, []);

  const getError = (control: string) =>
    errors[control]?.message ? errors[control].message : null;

  const onSubmitForm = () => {
    const postDescription = getValues('description');
    mutation.mutate({ description: postDescription });
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      {' '}
      <TextareaAutosize
        {...register('description', {
          required: {
            value: true,
            message: t('name-is-required')
          }
        })}
      />
      <AsyncButton textKey="add-post" />
    </form>
  );
};

export default NewPost;
