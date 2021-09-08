import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MediaWatcherModule } from '@msk/app/shell/ui/media-watcher';

import { ClassicLayoutComponent } from './classic.component';

@NgModule({
  declarations: [ClassicLayoutComponent],
  imports: [CommonModule, RouterModule, MediaWatcherModule],
  exports: [ClassicLayoutComponent],
})
export class ClassicLayoutModule {}
