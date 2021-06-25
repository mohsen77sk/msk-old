/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'classic-layout',
  templateUrl: './classic-layout.component.html',
  styleUrls: ['./classic-layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ClassicLayoutComponent implements OnInit {
  constructor() {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {}
}
