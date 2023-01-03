import {
  format as formatDate,
  isDate,
  formatRelative,
  formatDistance
} from 'date-fns';
import { enGB, de, it, fr, ro, es } from 'date-fns/locale';

import { DateFormats } from '../enums/dates';
import { i18nSupported } from '../enums/i18n';

const locales = {
  [i18nSupported.ENGLISH]: enGB,
  [i18nSupported.FRENCH]: fr,
  [i18nSupported.GERMAN]: de,
  [i18nSupported.ITALY]: it,
  [i18nSupported.ROMANIAN]: ro,
  [i18nSupported.SPANISH]: es
};

export const formatDateInTranslations = (value, format, lng) => {
  if (isDate(value)) {
    const locale = locales[lng];

    switch (format) {
      case DateFormats.SHORT:
        return formatDate(value, 'P', { locale });
      case DateFormats.LONG:
        return formatDate(value, 'PPPP', { locale });
      case DateFormats.RELATIVE:
        return formatRelative(value, new Date(), { locale });
      case DateFormats.AGO:
        return formatDistance(value, new Date(), {
          locale,
          addSuffix: true
        });
      default:
        return formatDate(value, format, { locale });
    }
  }

  return value;
};
