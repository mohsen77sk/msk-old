import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MskAlertComponent } from './alert.component';

@NgModule({
  declarations: [MskAlertComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [MskAlertComponent],
})
export class MskAlertModule {}
