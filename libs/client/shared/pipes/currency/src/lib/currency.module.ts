import { NgModule } from '@angular/core';
import { MskCurrencyPipe } from './currency.pipe';

@NgModule({
  declarations: [MskCurrencyPipe],
  exports: [MskCurrencyPipe],
})
export class MskCurrencyPipeModule {}
