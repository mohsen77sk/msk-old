import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';

import { webShellRoutes } from './web-shell.routes';

import { LayoutModule } from '@msk/app/shell/ui/layout';
import { MediaWatcherModule } from '@msk/app/shell/ui/media-watcher';
import { SplashScreenModule } from '@msk/app/shell/ui/splash-screen';
import { TailwindConfigModule } from '@msk/app/shell/ui/tailwind';
import { UtilsModule } from '@msk/app/shell/ui/utils';

const routerConfig: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  preloadingStrategy: PreloadAllModules,
};

@NgModule({
  imports: [
    // Services
    MediaWatcherModule,
    SplashScreenModule,
    TailwindConfigModule,
    UtilsModule,

    // Layout module of your application
    LayoutModule,

    RouterModule.forRoot(webShellRoutes, routerConfig),
  ],
  exports: [RouterModule],
})
export class WebShellModule {}
