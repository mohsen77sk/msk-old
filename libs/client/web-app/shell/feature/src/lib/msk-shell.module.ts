import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';

import {
  MATERIAL_SANITY_CHECKS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { TranslocoService } from '@ngneat/transloco';
import { AvailableLangsIds } from 'scoped-translations';

import { mskShellRoutes } from './msk-shell.routes';

import { MskIconsModule } from '@msk/client/shared/utils/icons';
import { MskTranslocoModule } from '@msk/client/shared/utils/transloco';
import { MskMaterialIntlModule } from '@msk/client/shared/utils/material-intl';

import { Locale } from 'date-fns/locale';
import { enUS } from 'date-fns/locale';
import { faIR } from 'date-fns-jalali/locale';
import { NgxMatDateFnsModule } from 'ngx-material-date-fns-adapter';

import { AuthCoreModule } from '@msk/client/web-app/shell/core/auth';
import { MessageCoreModule } from '@msk/client/web-app/shell/core/message';
import { NavigationCoreModule } from '@msk/client/web-app/shell/core/navigation';
import { NotificationCoreModule } from '@msk/client/web-app/shell/core/notification';
import { UserCoreModule } from '@msk/client/web-app/shell/core/user';
import {
  LayoutModule,
  layoutConfig,
} from '@msk/client/web-app/shell/ui/layout';

import { MskConfigModule } from '@msk/client/shared/services/config';
import { MskConfirmationModule } from '@msk/client/shared/services/confirmation';
import { MskMediaWatcherModule } from '@msk/client/shared/services/media-watcher';
import { MskServiceWorkerModule } from '@msk/client/shared/services/service-worker';
import { MskInternetStatusModule } from '@msk/client/shared/services/internet-status';
import { MskSplashScreenModule } from '@msk/client/shared/services/splash-screen';
import { MskPlatformModule } from '@msk/client/shared/services/platform';
import { MskUtilsModule } from '@msk/client/shared/services/utils';

const locale = {
  en: enUS,
  fa: faIR,
};

const routerConfig: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  preloadingStrategy: PreloadAllModules,
};

@NgModule({
  imports: [
    // Services
    MskConfigModule.forRoot(layoutConfig),
    MskConfirmationModule,
    MskMediaWatcherModule,
    MskServiceWorkerModule,
    MskInternetStatusModule,
    MskSplashScreenModule,
    MskPlatformModule,
    MskUtilsModule,

    // Utils
    MskIconsModule,
    MskTranslocoModule,
    MskMaterialIntlModule,
    NgxMatDateFnsModule,

    // Layout module of your application
    LayoutModule,

    // Core module of your application
    AuthCoreModule,
    MessageCoreModule,
    NavigationCoreModule,
    NotificationCoreModule,
    UserCoreModule,

    RouterModule.forRoot(mskShellRoutes, routerConfig),
  ],
  providers: [
    {
      // Disable 'theme' sanity check
      provide: MATERIAL_SANITY_CHECKS,
      useValue: {
        doctype: true,
        theme: false,
        version: true,
      },
    },
    {
      // Use the 'fill' appearance on Angular Material form fields by default
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'fill',
      },
    },
    {
      provide: MAT_DATE_LOCALE,
      deps: [TranslocoService],
      useFactory: (translocoService: TranslocoService): Locale => {
        return locale[translocoService.getActiveLang() as AvailableLangsIds];
      },
    },
  ],
  exports: [RouterModule],
})
export class MskWebShellModule {}
