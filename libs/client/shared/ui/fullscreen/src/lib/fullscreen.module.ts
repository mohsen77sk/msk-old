import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { TranslocoModule } from '@ngneat/transloco';

import { MskFullscreenComponent } from './fullscreen.component';

@NgModule({
  declarations: [MskFullscreenComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    TranslocoModule,
  ],
  exports: [MskFullscreenComponent],
})
export class MskFullscreenModule {}
