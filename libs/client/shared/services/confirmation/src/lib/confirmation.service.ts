import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { merge } from 'lodash-es';
import { MskConfirmationDialogComponent } from './dialog/dialog.component';
import { MskConfirmationConfig } from './confirmation.types';

@Injectable()
export class MskConfirmationService {
  private _defaultConfig: MskConfirmationConfig = {
    title: 'Confirm action',
    message: 'Are you sure you want to confirm this action?',
    icon: {
      show: true,
      name: 'close',
      color: 'warn',
    },
    actions: {
      confirm: {
        show: true,
        label: 'Confirm',
        color: 'warn',
      },
      cancel: {
        show: true,
        label: 'Cancel',
      },
    },
    dismissible: false,
  };

  /**
   * Constructor
   */
  constructor(
    @Inject(DOCUMENT) private _document: any,
    private _matDialog: MatDialog
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  open(
    config: MskConfirmationConfig = {}
  ): MatDialogRef<MskConfirmationDialogComponent> {
    // Merge the user config with the default config
    const userConfig = merge({}, this._defaultConfig, config);

    // Open the dialog
    return this._matDialog.open(MskConfirmationDialogComponent, {
      direction: this._document.body.getAttribute('dir'),
      autoFocus: false,
      disableClose: !userConfig.dismissible,
      data: userConfig,
      panelClass: 'msk-confirmation-dialog-panel',
    });
  }
}
