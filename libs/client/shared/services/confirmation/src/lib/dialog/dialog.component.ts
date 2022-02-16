import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationConfig } from '../confirmation.types';

@Component({
  selector: 'msk-confirmation-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MskConfirmationDialogComponent implements OnInit {
  /**
   * Constructor
   */
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationConfig,
    public matDialogRef: MatDialogRef<MskConfirmationDialogComponent>
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {}

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
}
