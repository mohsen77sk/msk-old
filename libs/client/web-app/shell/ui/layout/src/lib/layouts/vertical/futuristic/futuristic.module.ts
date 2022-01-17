import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { MskNavigationModule } from '@msk/client/shared/ui/navigation';
import { MskLoadingBarModule } from '@msk/client/shared/ui/loading-bar';
import { MskMediaWatcherModule } from '@msk/client/shared/services/media-watcher';

import { FullscreenModule } from '../../../common/fullscreen/fullscreen.module';
import { LanguagesModule } from '../../../common/languages/languages.module';
import { UserModule } from '../../../common/user/user.module';
import { FuturisticLayoutComponent } from './futuristic.component';

@NgModule({
  declarations: [FuturisticLayoutComponent],
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
    MskLoadingBarModule,
    MskMediaWatcherModule,
    //
    FullscreenModule,
    LanguagesModule,
    UserModule,
  ],
  exports: [FuturisticLayoutComponent],
})
export class FuturisticLayoutModule {}
