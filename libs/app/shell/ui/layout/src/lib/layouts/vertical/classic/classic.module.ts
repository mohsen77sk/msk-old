import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';

import { MskNavigationModule } from '@msk/app/shared/ui/navigation';
import { MskMediaWatcherModule } from '@msk/app/shared/services/media-watcher';

import { ClassicLayoutComponent } from './classic.component';

@NgModule({
  declarations: [ClassicLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MskNavigationModule,
    MskMediaWatcherModule,
  ],
  exports: [ClassicLayoutComponent],
})
export class ClassicLayoutModule {}
