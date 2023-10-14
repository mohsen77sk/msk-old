import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';
import {
  formatCurrency,
  formatNumber,
  getLocaleCurrencySymbol,
} from '@angular/common';

@Pipe({
  name: 'mskCurrency',
  pure: false,
})
export class MskCurrencyPipe implements PipeTransform {
  /**
   * Constructor
   */
  constructor(@Inject(LOCALE_ID) private _locale: string) {}

  /**
   * Transform
   *
   * @param value
   * @param currencyCode
   * @param digitsInfo
   * @param locale
   */
  transform(
    value: number | string | null | undefined,
    currencyCode?: string,
    digitsInfo?: string,
    locale?: string,
  ): string | null {
    if (!isValue(value)) return null;

    locale = locale || this._locale.valueOf();

    const currency = currencyCode || getLocaleCurrencySymbol(locale);

    try {
      const num = strToNumber(value);
      if (locale === 'fa') {
        return formatNumber(num, locale, digitsInfo) + ' ' + currency;
      } else {
        return formatCurrency(
          num,
          locale,
          currency as string,
          currencyCode,
          digitsInfo,
        );
      }
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}

function isValue(
  value: number | string | null | undefined,
): value is number | string {
  return !(value == null || value === '' || value !== value);
}

/**
 * Transforms a string into a number (if needed).
 */
function strToNumber(value: number | string): number {
  // Convert strings to numbers
  if (typeof value === 'string' && !isNaN(Number(value) - parseFloat(value))) {
    return Number(value);
  }
  if (typeof value !== 'number') {
    throw new Error(`${value} is not a number`);
  }
  return value;
}
