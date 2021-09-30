import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { MskNavigationModule } from '@msk/app/shared/ui/navigation';
import { MskMediaWatcherModule } from '@msk/app/shared/services/media-watcher';

import { FullscreenModule } from '../../../common/fullscreen/fullscreen.module';
import { LanguagesModule } from '../../../common/languages/languages.module';
import { UserModule } from '../../../common/user/user.module';
import { ClassyLayoutComponent } from './classy.component';

@NgModule({
  declarations: [ClassyLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    //
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    //
    MskNavigationModule,
    MskMediaWatcherModule,
    //
    FullscreenModule,
    LanguagesModule,
    UserModule,
  ],
  exports: [ClassyLayoutComponent],
})
export class ClassyLayoutModule {}
