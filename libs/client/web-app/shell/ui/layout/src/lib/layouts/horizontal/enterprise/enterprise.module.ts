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

import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { scopeLoader } from 'scoped-translations';

import { MessagesModule } from '../../../common/messages/messages.module';
import { NotificationsModule } from '../../../common/notifications/notifications.module';
import { LanguagesModule } from '../../../common/languages/languages.module';
import { UserModule } from '../../../common/user/user.module';
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
    MskFullscreenModule,
    MskNavigationModule,
    MskLoadingBarModule,
    MskMediaWatcherModule,
    TranslocoModule,
    //
    MessagesModule,
    NotificationsModule,
    LanguagesModule,
    UserModule,
  ],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'layout',
        loader: scopeLoader(
          (lang: string, root: string) =>
            import(`../../../${root}/${lang}.json`),
        ),
      },
    },
  ],
  exports: [EnterpriseLayoutComponent],
})
export class EnterpriseLayoutModule {}
