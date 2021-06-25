/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'empty-layout',
  templateUrl: './empty-layout.component.html',
  styleUrls: ['./empty-layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EmptyLayoutComponent implements OnInit {
  constructor() {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {}
}
