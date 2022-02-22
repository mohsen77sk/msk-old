import { Injectable } from '@angular/core';

import { zxcvbn, zxcvbnOptions, ZxcvbnResult } from '@zxcvbn-ts/core';
import zxcvbnCommonPackage from '@zxcvbn-ts/language-common';
import zxcvbnEnPackage from '@zxcvbn-ts/language-en';
import zxcvbnFaPackage from './language-fa';

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
  score(password: string): number {
    const result = this._checkPassword(password);
    return result.score;
  }

  /**
   * This will return the password strength score with feedback messages
   * return type { score: number; feedback: { suggestions: string[]; warning: string } }
   *
   * @param password
   */
  scoreWithFeedback(password: string): {
    score: number;
    feedback: { suggestions: string[]; warning: string };
  } {
    const result = this._checkPassword(password);
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
  private _checkPassword(password: string): ZxcvbnResult {
    // Set option
    this._setOption();
    // Return result check password
    return zxcvbn(password);
  }

  /**
   * Set option to check password
   *
   * @private
   */
  private _setOption(): void {
    zxcvbnOptions.setOptions({
      translations: zxcvbnEnPackage.translations,
      graphs: zxcvbnCommonPackage.adjacencyGraphs,
      dictionary: {
        ...zxcvbnCommonPackage.dictionary,
        ...zxcvbnEnPackage.dictionary,
      },
    });
  }
}
