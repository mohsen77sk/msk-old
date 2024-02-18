import { Injectable } from '@angular/core';

import { zxcvbn, zxcvbnOptions, ZxcvbnResult } from '@zxcvbn-ts/core';
import { dictionary } from '@zxcvbn-ts/language-common';
import {
  dictionary as enDictionary,
  translations as enTranslations,
} from '@zxcvbn-ts/language-en';
import {
  dictionary as faDictionary,
  translations as faTranslations,
} from './language-fa';

import { minLengthMatcher } from './matcher/minLengthMatcher';
import { AvailableLangsIds } from 'scoped-translations';

const Locale = {
  en: enTranslations,
  fa: faTranslations,
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
  score(password: string, language?: AvailableLangsIds): number {
    const result = this._checkPassword(password, language);
    return result.score;
  }

  /**
   * This will return the password strength score with feedback messages
   * return type { score: number; feedback: { warning: string | null; suggestions: string[]; } }
   *
   * @param password
   */
  scoreWithFeedback(
    password: string,
    language?: AvailableLangsIds,
  ): {
    score: number;
    feedback: { warning: string | null; suggestions: string[] };
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
    language: AvailableLangsIds = 'en',
  ): ZxcvbnResult {
    // Set option
    zxcvbnOptions.setOptions({
      translations: Locale[language as AvailableLangsIds],
      dictionary: {
        ...dictionary,
        ...enDictionary,
        ...faDictionary,
      },
    });
    // Add min length matcher
    zxcvbnOptions.addMatcher('minLength', minLengthMatcher);
    // Return result check password
    return zxcvbn(password);
  }
}
