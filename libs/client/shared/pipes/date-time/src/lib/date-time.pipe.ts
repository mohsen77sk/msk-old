import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';

import { format as gregorianFormat } from 'date-fns';
import { format as jalaliFormat } from 'date-fns-jalali';

import locale_enUS from 'date-fns/locale/en-US';
import locale_faIR from 'date-fns-jalali/locale/fa-IR';

const locale = {
  en: locale_enUS,
  fa: locale_faIR,
};
const localeFormat = {
  en: gregorianFormat,
  fa: jalaliFormat,
};

@Pipe({
  name: 'mskDateTime',
  pure: false,
})
export class MskDateTimePipe implements PipeTransform {
  /**
   * Constructor
   */
  constructor(@Inject(LOCALE_ID) private _locale: string) {}

  /**
   * Getter for locale
   */
  get locale(): 'en' | 'fa' {
    return this._locale.valueOf() as 'en' | 'fa';
  }

  /**
   * Transform
   *
   * @param value A string to format
   * @param format A string to format from value
   * @returns
   */
  transform(value: any, format = 'mediumDate'): any {
    if (value == null || value === '' || value !== value) return null;

    switch (format) {
      case 'short':
        return this._formatDate(value, 'Pp');
      case 'medium':
        return this._formatDate(value, 'PPpp');
      case 'long':
        return this._formatDate(value, 'PPPppp');
      case 'full':
        return this._formatDate(value, 'PPPPpppp');
      case 'shortDate':
        return this._formatDate(value, 'P');
      case 'mediumDate':
        return this._formatDate(value, 'PP');
      case 'longDate':
        return this._formatDate(value, 'PPP');
      case 'fullDate':
        return this._formatDate(value, 'PPPP');
      case 'shortTime':
        return this._formatDate(value, 'p');
      case 'mediumTime':
        return this._formatDate(value, 'pp');
      case 'longTime':
        return this._formatDate(value, 'ppp');
      case 'fullTime':
        return this._formatDate(value, 'pppp');
      default:
        return this._formatDate(value, format);
    }
  }

  private _formatDate(value: any, format: string): string {
    return localeFormat[this.locale](new Date(value), format, {
      locale: locale[this.locale],
    });
  }
}
