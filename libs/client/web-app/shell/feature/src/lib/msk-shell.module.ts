import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';

import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatDateFnsModule } from '@angular/material-date-fns-adapter';

import { mskShellRoutes } from './msk-shell.routes';

import { IconsCoreModule } from '@msk/client/web-app/shell/core/icons';
import { MessageCoreModule } from '@msk/client/web-app/shell/core/message';
import { TranslocoCoreModule } from '@msk/client/web-app/shell/core/transloco';
import { NavigationCoreModule } from '@msk/client/web-app/shell/core/navigation';
import { NotificationCoreModule } from '@msk/client/web-app/shell/core/notification';
import { UserCoreModule } from '@msk/client/web-app/shell/core/user';
import {
  MskLayoutModule,
  layoutConfig,
} from '@msk/client/web-app/shell/ui/layout';

import { MskConfigModule } from '@msk/client/shared/services/config';
import { MskMediaWatcherModule } from '@msk/client/shared/services/media-watcher';
import { MskSplashScreenModule } from '@msk/client/shared/services/splash-screen';
import { MskTailwindConfigModule } from '@msk/client/shared/services/tailwind';
import { MskUtilsModule } from '@msk/client/shared/services/utils';

const routerConfig: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  preloadingStrategy: PreloadAllModules,
};

@NgModule({
  imports: [
    // Services
    MskConfigModule.forRoot(layoutConfig),
    MskMediaWatcherModule,
    MskSplashScreenModule,
    MskTailwindConfigModule,
    MskUtilsModule,

    // Material date module
    MatDateFnsModule,

    // Layout module of your application
    MskLayoutModule,

    // Core module of your application
    IconsCoreModule,
    MessageCoreModule,
    TranslocoCoreModule,
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
  ],
  exports: [RouterModule],
})
export class MskWebShellModule {}
