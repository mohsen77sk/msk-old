import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { MskVirtualKeyboardDirective } from './virtual-keyboard.directive';
import { MskVirtualKeyboardComponent } from './virtual-keyboard.component';

@NgModule({
  declarations: [MskVirtualKeyboardDirective, MskVirtualKeyboardComponent],
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [MskVirtualKeyboardDirective],
})
export class MskVirtualKeyboardModule {}
