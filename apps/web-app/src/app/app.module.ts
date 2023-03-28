import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MskWebShellModule } from '@msk/client/web-app/shell/feature';
import { GetAppConfigProvider } from '@msk/client/shared/app-config';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,

    MskWebShellModule,
  ],
  providers: [GetAppConfigProvider(environment)],
  bootstrap: [AppComponent],
})
export class AppModule {}
