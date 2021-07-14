import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';

import { webShellRoutes } from './web-shell.routes';

import { LayoutModule } from '@msk/app/shell/ui/layout';
import { SplashScreenModule } from '@msk/app/shell/ui/splash-screen';

const routerConfig: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  preloadingStrategy: PreloadAllModules,
};

@NgModule({
  imports: [
    LayoutModule,
    SplashScreenModule,

    RouterModule.forRoot(webShellRoutes, routerConfig),
  ],
  exports: [RouterModule],
})
export class WebShellModule {}
