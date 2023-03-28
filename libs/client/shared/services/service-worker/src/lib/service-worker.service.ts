import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate, VersionEvent } from '@angular/service-worker';
import { MskServiceWorkerSnackBarComponent } from './snack-bar/snack-bar.component';

@Injectable()
export class MskServiceWorkerService {
  /**
   * constructor
   */
  constructor(
    @Inject(DOCUMENT) private _document: any,
    private _swUpdate: SwUpdate,
    private _matSnackBar: MatSnackBar
  ) {
    // If the service worker is enabled
    if (this._swUpdate.isEnabled) {
      // Check for update
      this._swUpdate.checkForUpdate();

      // Update
      this._swUpdate.versionUpdates.subscribe((res: VersionEvent) => {
        if (res.type === 'VERSION_READY') {
          this._matSnackBar.openFromComponent(
            MskServiceWorkerSnackBarComponent,
            {
              duration: 10000,
              panelClass: [
                'bg-gray-50',
                'dark:bg-gray-800',
                'text-amber-600',
                'dark:text-amber-400',
              ],
              direction: this._document.body.getAttribute('dir'),
            }
          );
        }
      });
    } else {
      console.warn('not enable Service Worker 🙁');
    }
  }
}
