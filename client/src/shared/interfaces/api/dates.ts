import { DateFormats } from 'src/shared/enums/dates';

export interface i18DateConfig {
  format: DateFormats;
  date: Date | number;
}
