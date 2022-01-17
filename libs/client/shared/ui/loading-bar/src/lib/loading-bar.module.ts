import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MskLoadingBarComponent } from './loading-bar.component';
import { MskLoadingBarInterceptor } from './loading-bar.interceptor';

@NgModule({
  declarations: [MskLoadingBarComponent],
  imports: [CommonModule, MatProgressBarModule],
  exports: [MskLoadingBarComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MskLoadingBarInterceptor,
      multi: true,
    },
  ],
})
export class MskLoadingBarModule {}
