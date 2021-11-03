import { NgModule } from '@angular/core';

import { MskSplashScreenService } from './splash-screen.service';

@NgModule({
  providers: [MskSplashScreenService],
})
export class MskSplashScreenModule {
  /**
   * Constructor
   */
  constructor(private _splashScreenService: MskSplashScreenService) {}
}
