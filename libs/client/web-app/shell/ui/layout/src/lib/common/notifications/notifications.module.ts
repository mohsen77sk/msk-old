import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { MskTimeAgoPipeModule } from '@msk/client/shared/pipes/time-ago';

import { TranslocoModule } from '@ngneat/transloco';

import { NotificationsComponent } from './notifications.component';

@NgModule({
  declarations: [NotificationsComponent],
  imports: [
    CommonModule,
    RouterModule,
    OverlayModule,
    PortalModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MskTimeAgoPipeModule,
    TranslocoModule,
  ],
  exports: [NotificationsComponent],
})
export class NotificationsModule {}
