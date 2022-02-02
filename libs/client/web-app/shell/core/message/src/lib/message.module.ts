import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MessageService } from './message.service';

@NgModule({
  imports: [HttpClientModule],
})
export class MessageCoreModule {
  /**
   * Constructor
   */
  constructor(private _messageService: MessageService) {}
}
