import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { MskNavigationModule } from '@msk/app/shared/ui/navigation';
import { MskMediaWatcherModule } from '@msk/app/shared/services/media-watcher';

import { EnterpriseLayoutComponent } from './enterprise.component';

@NgModule({
  declarations: [EnterpriseLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    //
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    //
    MskNavigationModule,
    MskMediaWatcherModule,
  ],
  exports: [EnterpriseLayoutComponent],
})
export class EnterpriseLayoutModule {}
