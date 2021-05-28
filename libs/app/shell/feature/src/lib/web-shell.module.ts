import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { webShellRoutes } from './web-shell.routes';

import { LayoutModule } from '@msk/app/shell/ui/layout';
import { SplashScreenModule } from '@msk/app/shell/ui/splash-screen';

@NgModule({
  imports: [
    RouterModule.forRoot(webShellRoutes, {
      scrollPositionRestoration: 'top',
    }),

    LayoutModule,
    SplashScreenModule,
  ],
  exports: [RouterModule],
})
export class WebShellModule {}
