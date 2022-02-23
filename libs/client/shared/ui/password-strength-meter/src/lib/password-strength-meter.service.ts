import { Injectable } from '@angular/core';

import { zxcvbn, zxcvbnOptions, ZxcvbnResult } from '@zxcvbn-ts/core';
import zxcvbnCommonPackage from '@zxcvbn-ts/language-common';
import zxcvbnEnPackage from '@zxcvbn-ts/language-en';
import zxcvbnFaPackage from './language-fa';

import { minLengthMatcher } from './matcher/minLengthMatcher';

type LOCALE_TYPE = 'en' | 'fa';

const Locale = {
  en: zxcvbnEnPackage.translations,
  fa: zxcvbnFaPackage.translations,
};

@Injectable()
export class MskPasswordStrengthMeterService {
  /**
   * Constructor
   */
  constructor() {}

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   *  This will return the password strength score in number
   *  0 - too guessable
   *  1 - very guessable
   *  2 - somewhat guessable
   *  3 - safely unguessable
   *  4 - very unguessable
   *
   *  @param password
   */
  score(password: string, language?: string): number {
    const result = this._checkPassword(password, language);
    return result.score;
  }

  /**
   * This will return the password strength score with feedback messages
   * return type { score: number; feedback: { suggestions: string[]; warning: string } }
   *
   * @param password
   */
  scoreWithFeedback(
    password: string,
    language?: string
  ): {
    score: number;
    feedback: { suggestions: string[]; warning: string };
  } {
    const result = this._checkPassword(password, language);
    return { score: result.score, feedback: result.feedback };
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Check password
   *
   * @param password
   * @private
   */
  private _checkPassword(
    password: string,
    language: string = 'en'
  ): ZxcvbnResult {
    // Set option
    zxcvbnOptions.setOptions({
      translations: Locale[language as LOCALE_TYPE],
      dictionary: {
        ...zxcvbnCommonPackage.dictionary,
        ...zxcvbnEnPackage.dictionary,
      },
    });
    // Add min length matcher
    zxcvbnOptions.addMatcher('minLength', minLengthMatcher);
    // Return result check password
    return zxcvbn(password);
  }
}
