import { TextField } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';

import { RegisterFields } from '@backend/controllers/auth/interfaces/register.interface';
import {
  emailValidityPattern,
  fullNameMaxLength,
  fullNameMinLength,
  passwordMinLength
} from '../../constants/auth-validators';
import useAppTranslation from 'src/shared/hooks/useAppTranslation';
import { registerHandler } from '../../fetchers/auth';
import AsyncButton from 'src/shared/components/buttons/async-button/AsyncButton';
import { useNavigate } from 'react-router-dom';
import { routesUrls } from 'src/shared/constants/routes/routes';

const Register = () => {
  const {
    register,
    getValues,
    handleSubmit,
    setFocus,
    watch,
    formState: { errors }
  } = useForm<RegisterFields>({ shouldFocusError: true });

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: ({
      fullName,
      email,
      password,
      confirmPassword
    }: RegisterFields) =>
      registerHandler({ fullName, email, password, confirmPassword })
  });

  const [t] = useAppTranslation();

  useEffect(() => {
    mutation.isSuccess && navigate(routesUrls.HOME.MAIN_PAGE);
  }, [mutation.isSuccess]);

  useEffect(() => {
    setFocus('fullName');
  }, []);

  const getError = (control: string) =>
    errors[control]?.message ? errors[control].message : null;

  const validateConfirmPassword = (value: string) => {
    if (value !== watch('password')) {
      return 'Passwords do not match!';
    }
  };

  const onSubmitForm = () => {
    const fullName = getValues('fullName');
    const email = getValues('email');
    const password = getValues('password');
    const confirmPassword = getValues('confirmPassword');
    mutation.mutate({ fullName, email, password, confirmPassword });
  };
  return (
    <div className="container flex flex-col items-center justify-center mx-auto h-screen">
      <h1 className="mb-5 text-2xl text-blue-600">{t('lets-sign-you-up')}</h1>
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="flex flex-col justify-between w-3/4 h-3/6"
      >
        <TextField
          {...register('fullName', {
            required: {
              value: true,
              message: t('name-is-required')
            },
            minLength: {
              value: fullNameMinLength,
              message: t('minimum-length-characters', {
                number: fullNameMinLength
              })
            },
            maxLength: {
              value: fullNameMaxLength,
              message: t('maximum-length-characters', {
                number: fullNameMaxLength
              })
            }
          })}
          error={!!getError('fullName')}
          helperText={getError('fullName')}
          id="name"
          label={t('full-name')}
          variant="outlined"
        />
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
            }
          })}
          error={!!getError('password')}
          helperText={getError('password')}
          id="password"
          label={t('password')}
          type="password"
          variant="outlined"
        />
        <TextField
          {...register('confirmPassword', {
            required: {
              value: true,
              message: t('confirm-password-is-required')
            },
            minLength: {
              value: passwordMinLength,
              message: t('minimum-length-characters', {
                number: passwordMinLength
              })
            },
            validate: validateConfirmPassword
          })}
          error={!!getError('confirmPassword')}
          helperText={getError('confirmPassword')}
          id="password"
          label={t('confirm-password')}
          type="password"
          variant="outlined"
        />
        <AsyncButton textKey="sign-me-up" isLoading={mutation.isLoading} />
      </form>
    </div>
  );
};

export default Register;
