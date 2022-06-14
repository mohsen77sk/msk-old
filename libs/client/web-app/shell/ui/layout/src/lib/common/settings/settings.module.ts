import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MskDrawerModule } from '@msk/client/shared/ui/drawer';

import { TranslocoModule } from '@ngneat/transloco';

import { LayoutSettingsComponent } from './settings.component';

@NgModule({
  declarations: [LayoutSettingsComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MskDrawerModule,
    TranslocoModule,
  ],
  exports: [LayoutSettingsComponent],
})
export class LayoutSettingsModule {}
