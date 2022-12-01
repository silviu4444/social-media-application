import { useTranslation } from 'react-i18next';

const useAppTranslation = (resourceLanguage = 'common') =>
  useTranslation(resourceLanguage);

export default useAppTranslation;
