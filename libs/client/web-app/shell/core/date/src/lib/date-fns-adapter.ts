import { Inject, Injectable, Optional } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';

import * as gregorian from 'date-fns';
import * as jalali from 'date-fns-jalali';
import locale_enUS from 'date-fns/locale/en-US';
import locale_faIR from 'date-fns-jalali/locale/fa-IR';

const dateFns = {
  gregorian: {
    getMonth: gregorian.getMonth,
    getYear: gregorian.getYear,
    getDate: gregorian.getDate,
    getDay: gregorian.getDay,
    getDaysInMonth: gregorian.getDaysInMonth,
    formatISO: gregorian.formatISO,
    addYears: gregorian.addYears,
    addMonths: gregorian.addMonths,
    addDays: gregorian.addDays,
    isValid: gregorian.isValid,
    isDate: gregorian.isDate,
    format: gregorian.format,
    parseISO: gregorian.parseISO,
    parse: gregorian.parse,
  },
  jalali: {
    getMonth: jalali.getMonth,
    getYear: jalali.getYear,
    getDate: jalali.getDate,
    getDay: jalali.getDay,
    getDaysInMonth: jalali.getDaysInMonth,
    formatISO: jalali.formatISO,
    addYears: jalali.addYears,
    addMonths: jalali.addMonths,
    addDays: jalali.addDays,
    isValid: jalali.isValid,
    isDate: jalali.isDate,
    format: jalali.format,
    parseISO: jalali.parseISO,
    parse: jalali.parse,
  },
};

const locale = {
  en: locale_enUS,
  fa: locale_faIR,
};

/** Creates an array and fills it with values. */
function range<T>(length: number, valueFunction: (index: number) => T): T[] {
  const valuesArray = Array(length);
  for (let i = 0; i < length; i++) {
    valuesArray[i] = valueFunction(i);
  }
  return valuesArray;
}

// date-fns doesn't have a way to read/print month names or days of the week directly,
// so we get them by formatting a date with a format that produces the desired month/day.
const MONTH_FORMATS = {
  long: 'LLLL',
  short: 'LLL',
  narrow: 'LLLLL',
};

const DAY_OF_WEEK_FORMATS = {
  long: 'EEEE',
  short: 'EEE',
  narrow: 'EEEEE',
};

@Injectable()
export class MskDateFnsAdapter extends DateAdapter<Date, Locale> {
  /** Calendar type. */
  private _calendarType!: 'gregorian' | 'jalali';
  /** Locale code. */
  private _localeCode!: 'en' | 'fa';

  /**
   * constructor
   */
  constructor(@Optional() @Inject(MAT_DATE_LOCALE) dateLocale: any) {
    super();
    this.setLocale(dateLocale);
  }

  /**
   * Sets the locale used for all dates.
   *
   * @param locale The new locale
   */
  override setLocale(locale: any): void {
    switch (locale) {
      case 'en':
        this._calendarType = 'gregorian';
        break;
      case 'fa':
        this._calendarType = 'jalali';
        break;
      default:
        throw new Error(`Not Support LOCALE_ID (${locale})`);
    }
    super.setLocale(locale);
    this._localeCode = locale;
  }

  getYear(date: Date): number {
    return dateFns[this._calendarType].getYear(date);
  }

  getMonth(date: Date): number {
    return dateFns[this._calendarType].getMonth(date);
  }

  getDate(date: Date): number {
    return dateFns[this._calendarType].getDate(date);
  }

  getDayOfWeek(date: Date): number {
    return dateFns[this._calendarType].getDay(date);
  }

  getMonthNames(style: 'long' | 'short' | 'narrow'): string[] {
    const pattern = MONTH_FORMATS[style];
    return range(12, (i) => this.format(new Date(2017, i, 1), pattern));
  }

  getDateNames(): string[] {
    const dtf =
      typeof Intl !== 'undefined'
        ? new Intl.DateTimeFormat(this.locale.code, {
            day: 'numeric',
            timeZone: 'utc',
          })
        : null;

    return range(31, (i) => {
      if (dtf) {
        // date-fns doesn't appear to support this functionality.
        // Fall back to `Intl` on supported browsers.
        const date = new Date();
        date.setUTCFullYear(2017, 0, i + 1);
        date.setUTCHours(0, 0, 0, 0);
        return dtf.format(date).replace(/[\u200e\u200f]/g, '');
      }

      return i + '';
    });
  }

  getDayOfWeekNames(style: 'long' | 'short' | 'narrow'): string[] {
    const pattern = DAY_OF_WEEK_FORMATS[style];
    return range(7, (i) => this.format(new Date(2017, 0, i + 1), pattern));
  }

  getYearName(date: Date): string {
    return this.format(date, 'y');
  }

  getFirstDayOfWeek(): number {
    return this.locale.options?.weekStartsOn ?? 0;
  }

  getNumDaysInMonth(date: Date): number {
    return dateFns[this._calendarType].getDaysInMonth(date);
  }

  clone(date: Date): Date {
    return new Date(date.getTime());
  }

  createDate(year: number, month: number, date: number): Date {
    // Check for invalid month and date (except upper bound on date which we have to check after
    // creating the Date).
    if (month < 0 || month > 11) {
      throw Error(
        `Invalid month index "${month}". Month index has to be between 0 and 11.`
      );
    }

    if (date < 1) {
      throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
    }

    // Passing the year to the constructor causes year numbers <100 to be converted to 19xx.
    // To work around this we use `setFullYear` and `setHours` instead.
    const result = new Date();
    result.setFullYear(year, month, date);
    result.setHours(0, 0, 0, 0);

    // Check that the date wasn't above the upper bound for the month, causing the month to overflow
    if (result.getMonth() != month) {
      throw Error(`Invalid date "${date}" for month with index "${month}".`);
    }

    return result;
  }

  today(): Date {
    return new Date();
  }

  parse(value: any, parseFormat: string | string[]): Date | null {
    if (typeof value == 'string' && value.length > 0) {
      const iso8601Date = dateFns[this._calendarType].parseISO(value);

      if (this.isValid(iso8601Date)) {
        return iso8601Date;
      }

      const formats = Array.isArray(parseFormat) ? parseFormat : [parseFormat];

      if (!parseFormat.length) {
        throw Error('Formats array must not be empty.');
      }

      for (const currentFormat of formats) {
        const fromFormat = dateFns[this._calendarType].parse(
          value,
          currentFormat,
          new Date(),
          {
            locale: locale[this._localeCode],
          }
        );

        if (this.isValid(fromFormat)) {
          return fromFormat;
        }
      }

      return this.invalid();
    } else if (typeof value === 'number') {
      return new Date(value);
    } else if (value instanceof Date) {
      return this.clone(value);
    }

    return null;
  }

  format(date: Date, displayFormat: string): string {
    if (!this.isValid(date)) {
      throw Error('DateFnsAdapter: Cannot format invalid date.');
    }

    return dateFns[this._calendarType].format(date, displayFormat, {
      locale: locale[this._localeCode],
    });
  }

  addCalendarYears(date: Date, years: number): Date {
    return dateFns[this._calendarType].addYears(date, years);
  }

  addCalendarMonths(date: Date, months: number): Date {
    return dateFns[this._calendarType].addMonths(date, months);
  }

  addCalendarDays(date: Date, days: number): Date {
    return dateFns[this._calendarType].addDays(date, days);
  }

  toIso8601(date: Date): string {
    return dateFns[this._calendarType].formatISO(date, {
      representation: 'date',
    });
  }

  /**
   * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
   * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
   * invalid date for all other values.
   */
  override deserialize(value: any): Date | null {
    if (typeof value === 'string') {
      if (!value) {
        return null;
      }
      const date = dateFns[this._calendarType].parseISO(value);
      if (this.isValid(date)) {
        return date;
      }
    }
    return super.deserialize(value);
  }

  isDateInstance(obj: any): boolean {
    return dateFns[this._calendarType].isDate(obj);
  }

  isValid(date: Date): boolean {
    return dateFns[this._calendarType].isValid(date);
  }

  invalid(): Date {
    return new Date(NaN);
  }
}
