import { Component, ViewEncapsulation } from '@angular/core';
import { MskDrawerMode } from '@msk/client/shared/ui/drawer';

@Component({
  selector: 'msk-docs-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DrawerComponent {
  drawerMode!: MskDrawerMode;
  drawerOpened!: boolean;

  /**
   * Constructor
   */
  constructor() {
    // Set the defaults
    this.drawerMode = 'side';
    this.drawerOpened = true;
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Toggle the drawer mode
   */
  toggleDrawerMode(): void {
    this.drawerMode = this.drawerMode === 'side' ? 'over' : 'side';
  }

  /**
   * Toggle the drawer open
   */
  toggleDrawerOpen(): void {
    this.drawerOpened = !this.drawerOpened;
  }

  /**
   * Drawer opened changed
   *
   * @param opened
   */
  drawerOpenedChanged(opened: boolean): void {
    this.drawerOpened = opened;
  }
}
