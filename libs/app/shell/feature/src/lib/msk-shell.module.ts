import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';

import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { mskShellRoutes } from './msk-shell.routes';

import { TranslocoCoreModule } from '@msk/app/shell/core/transloco';
import { MskLayoutModule, layoutConfig } from '@msk/app/shell/ui/layout';

import { MskConfigModule } from '@msk/app/shared/services/config';
import { MskMediaWatcherModule } from '@msk/app/shared/services/media-watcher';
import { MskSplashScreenModule } from '@msk/app/shared/services/splash-screen';
import { MskTailwindConfigModule } from '@msk/app/shared/services/tailwind';
import { MskUtilsModule } from '@msk/app/shared/services/utils';

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

    // Layout module of your application
    MskLayoutModule,

    // Core module of your application
    TranslocoCoreModule,

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
