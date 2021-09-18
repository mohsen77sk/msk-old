import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { MskNavigationModule } from '@msk/app/shared/ui/navigation';
import { MskMediaWatcherModule } from '@msk/app/shared/services/media-watcher';

import { UserModule } from '../../../common/user/user.module';
import { MaterialLayoutComponent } from './material.component';

@NgModule({
  declarations: [MaterialLayoutComponent],
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
    //
    UserModule
  ],
  exports: [MaterialLayoutComponent],
})
export class MaterialLayoutModule {}
