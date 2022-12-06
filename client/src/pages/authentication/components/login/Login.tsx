import { TextField } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';

import {
  emailValidityPattern,
  passwordMinLength,
  maxLengthPassword
} from '../../constants/auth-validators';
import useAppTranslation from 'src/shared/hooks/utility/useAppTranslation';
import { loginHandler } from '../../fetchers/auth';
import AsyncButton from 'src/shared/components/buttons/async-button/AsyncButton';
import { Link, useNavigate } from 'react-router-dom';
import { RouterLinks } from 'src/shared/constants/routes/routes';
import { handleAuthErrors } from '../../utility/handle-auth-errors';
import { useAppDispatch } from 'src/store';
import { UserActions } from 'src/pages/user/store/user';
import { BaseResponse } from '@backend/shared/interfaces/api';
import { RegisterFields } from '@backend/controllers/auth/interfaces/auth.interface';

const Login = () => {
  const {
    register,
    getValues,
    handleSubmit,
    setError,
    setFocus,
    formState: { errors }
  } = useForm<RegisterFields>({ shouldFocusError: true });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const mutation = useMutation<BaseResponse, Error, {}>({
    mutationFn: ({ email, password }: RegisterFields) =>
      loginHandler({ email, password })
  });

  const [t] = useAppTranslation();

  useEffect(() => {
    if (mutation.isSuccess) {
      navigate(RouterLinks.HOME);
      dispatch(UserActions.userSignIn());
    }
  }, [mutation.isSuccess]);

  useEffect(() => {
    if (mutation.isError) {
      const errorData = handleAuthErrors(mutation.error);
      setError(
        errorData.inputName as any,
        { message: t(errorData.errorKeyMessage) },
        {
          shouldFocus: true
        }
      );
    }
  }, [mutation.isError]);

  useEffect(() => {
    setFocus('email');
  }, []);

  const getError = (control: string) =>
    errors[control]?.message ? errors[control].message : null;

  const onSubmitForm = () => {
    const email = getValues('email');
    const password = getValues('password');
    mutation.mutate({ email, password });
  };

  return (
    <div className="container flex flex-col items-center justify-center mx-auto h-screen">
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="flex flex-col mt-6 justify-between w-3/4 h-2/6"
      >
        <TextField
          {...register('email', {
            required: {
              value: true,
              message: t('email-is-required')
            },
            pattern: {
              value: emailValidityPattern,
              message: t('email-address-invalid')
            }
          })}
          error={!!getError('email')}
          helperText={getError('email')}
          id="email"
          label={t('email')}
          type="email"
          variant="outlined"
        />
        <TextField
          {...register('password', {
            required: {
              value: true,
              message: t('password-is-required')
            },
            minLength: {
              value: passwordMinLength,
              message: t('minimum-length-characters', {
                number: passwordMinLength
              })
            },
            maxLength: {
              value: maxLengthPassword,
              message: t('maximum-length-characters', {
                number: maxLengthPassword
              })
            }
          })}
          error={!!getError('password')}
          helperText={getError('password')}
          id="password"
          label={t('password')}
          type="password"
          variant="outlined"
        />
        <p className='text-center my-2'>
          {t('dont-have-an-account-yet')}
          <Link className='text-blue-600 ml-1' to={RouterLinks.SIGNUP}>{t('register')}</Link>
        </p>
        <AsyncButton textKey="login" isLoading={mutation.isLoading} />
      </form>
    </div>
  );
};

export default Login;
