import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

import { filter, take } from 'rxjs/operators';

@Injectable()
export class SplashScreenService {
  splashScreenEl: any;

  /**
   * Constructor
   *
   * @param _document
   * @param {Router} _router
   */
  constructor(
    @Inject(DOCUMENT) private _document: any,
    private _router: Router
  ) {
    // Initialize
    this._init();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Initialize
   *
   * @private
   */
  private _init(): void {
    // Get the splash screen element
    this.splashScreenEl = this._document.body.querySelector(
      'msk-splash-screen'
    );

    // If the splash screen element exists...
    if (this.splashScreenEl) {
      // Hide it on the first NavigationEnd event
      this._router.events
        .pipe(
          filter((event) => event instanceof NavigationEnd),
          take(1)
        )
        .subscribe(() => {
          setTimeout(() => {
            this.hide();
          });
        });
    }
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Show the splash screen
   */
  show(): void {
    this._document.body.classList.remove('msk-splash-screen-hidden');
  }

  /**
   * Hide the splash screen
   */
  hide(): void {
    this._document.body.classList.add('msk-splash-screen-hidden');
  }
}
