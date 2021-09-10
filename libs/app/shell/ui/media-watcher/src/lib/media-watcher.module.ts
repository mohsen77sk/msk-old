import { NgModule } from '@angular/core';
import { MskMediaWatcherService } from './media-watcher.service';

@NgModule({
  providers: [MskMediaWatcherService],
})
export class MskMediaWatcherModule {
  /**
   * Constructor
   */
  constructor(private _mediaWatcherService: MskMediaWatcherService) {}
}
