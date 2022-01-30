import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NotificationService } from './notification.service';

@NgModule({
  imports: [HttpClientModule],
})
export class NotificationCoreModule {
  /**
   * Constructor
   */
  constructor(private _notificationService: NotificationService) {}
}
