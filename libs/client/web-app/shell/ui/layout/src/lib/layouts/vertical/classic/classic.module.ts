import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { MskFullscreenModule } from '@msk/client/shared/ui/fullscreen';
import { MskNavigationModule } from '@msk/client/shared/ui/navigation';
import { MskLoadingBarModule } from '@msk/client/shared/ui/loading-bar';
import { MskMediaWatcherModule } from '@msk/client/shared/services/media-watcher';

import { NotificationsModule } from '../../../common/notifications/notifications.module';
import { LanguagesModule } from '../../../common/languages/languages.module';
import { UserModule } from '../../../common/user/user.module';
import { ClassicLayoutComponent } from './classic.component';

@NgModule({
  declarations: [ClassicLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    //
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    //
    MskFullscreenModule,
    MskNavigationModule,
    MskLoadingBarModule,
    MskMediaWatcherModule,
    //
    NotificationsModule,
    LanguagesModule,
    UserModule,
  ],
  exports: [ClassicLayoutComponent],
})
export class ClassicLayoutModule {}
