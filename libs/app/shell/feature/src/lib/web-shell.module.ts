import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';

import { webShellRoutes } from './web-shell.routes';

import { MskLayoutModule } from '@msk/app/shell/ui/layout';
import { MskMediaWatcherModule } from '@msk/app/shell/ui/media-watcher';
import { MskSplashScreenModule } from '@msk/app/shell/ui/splash-screen';
import { MskTailwindConfigModule } from '@msk/app/shell/ui/tailwind';

const routerConfig: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  preloadingStrategy: PreloadAllModules,
};

@NgModule({
  imports: [
    // Services
    MskMediaWatcherModule,
    MskSplashScreenModule,
    MskTailwindConfigModule,

    // Layout module of your application
    MskLayoutModule,

    RouterModule.forRoot(webShellRoutes, routerConfig),
  ],
  exports: [RouterModule],
})
export class MskWebShellModule {}
