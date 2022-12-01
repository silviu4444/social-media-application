import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { UILanguageState } from 'src/store/UI/ui.selectors';
import useAppTranslation from './useAppTranslation';

const useUpdateLanguage = () => {
  const [t, i18n] = useAppTranslation();
  const language = useSelector(UILanguageState);
  useEffect(() => {
    const previousLanguage = i18n.language;
    previousLanguage !== language && i18n.changeLanguage(language);
  }, [language, i18n]);
};

export default useUpdateLanguage;
