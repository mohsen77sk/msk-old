import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MskConfirmationService } from './confirmation.service';
import { MskConfirmationDialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [MskConfirmationDialogComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule, MatDialogModule],
  providers: [MskConfirmationService],
})
export class MskConfirmationModule {
  /**
   * Constructor
   */
  constructor(private _mskConfirmationService: MskConfirmationService) {}
}
