import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MskLoadingBarModule } from '@msk/client/shared/ui/loading-bar';

import { EmptyLayoutComponent } from './empty.component';

@NgModule({
  declarations: [EmptyLayoutComponent],
  imports: [CommonModule, RouterModule, MskLoadingBarModule],
  exports: [EmptyLayoutComponent],
})
export class EmptyLayoutModule {}
