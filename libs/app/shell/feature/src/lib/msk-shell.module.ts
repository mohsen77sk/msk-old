import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';

import { mskShellRoutes } from './msk-shell.routes';

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

    RouterModule.forRoot(mskShellRoutes, routerConfig),
  ],
  exports: [RouterModule],
})
export class MskWebShellModule {}
