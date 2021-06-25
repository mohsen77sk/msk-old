import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { webShellRoutes } from './web-shell.routes';

import { LayoutModule } from '@msk/app/shell/ui/layout';
import { SplashScreenModule } from '@msk/app/shell/ui/splash-screen';

@NgModule({
  imports: [
    LayoutModule,
    SplashScreenModule,

    RouterModule.forRoot(webShellRoutes, {
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class WebShellModule {}
