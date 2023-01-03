import i18next from 'i18next';
import { useSelector } from 'react-redux';

import { DateFormats } from 'src/shared/enums/dates';
import { UILanguageState } from 'src/store/UI/ui.selectors';
import useAppTranslation from './useAppTranslation';

const useDateTranslate = () => {
  const [t] = useAppTranslation();
  const language = useSelector(UILanguageState);
  const translateDate = (
    key: string,
    date: Date | string,
    format: DateFormats
  ) =>
    t(key, { date: i18next.options.interpolation.format(new Date(date), format, language) });

  return { translateDate };
};

export default useDateTranslate;
