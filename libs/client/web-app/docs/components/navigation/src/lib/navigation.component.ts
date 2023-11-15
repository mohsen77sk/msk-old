import { Component, ViewEncapsulation } from '@angular/core';
import {
  MskNavigationItem,
  MskNavigationService,
  MskVerticalNavigationComponent,
} from '@msk/client/shared/ui/navigation';

@Component({
  selector: 'msk-docs-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavigationComponent {
  /**
   * Constructor
   */
  constructor(private _mskNavigationService: MskNavigationService) {}
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Get navigation item
   *
   * @param itemId
   * @param navigationName
   */
  getNavItem(itemId: string, navigationName: string): MskNavigationItem | null {
    // Get the component -> navigation data -> item
    const navComponent =
      this._mskNavigationService.getComponent<MskVerticalNavigationComponent>(
        navigationName,
      );

    // Return if the navigation component does not exist
    if (!navComponent) {
      return null;
    }

    // Get the navigation item
    const navigation = navComponent.navigation;
    const item = this._mskNavigationService.getItem(itemId, navigation);
    console.log(item);
    return item;
  }

  /**
   * Update badge title
   *
   * @param itemId
   * @param navigationName
   * @param title
   */
  updateBadgeTitle(
    itemId: string,
    navigationName: string,
    title: string,
  ): void {
    // Get the component -> navigation data -> item
    const navComponent =
      this._mskNavigationService.getComponent<MskVerticalNavigationComponent>(
        navigationName,
      );

    // Return if the navigation component does not exist
    if (!navComponent) {
      return;
    }

    // Get the navigation item, update the badge and refresh the component
    const navigation = navComponent.navigation;
    const item = this._mskNavigationService.getItem(itemId, navigation);
    if (item) {
      item.badge = {
        title,
        classes: 'px-2 bg-primary-500 text-black rounded-full',
      };
    }
    navComponent.refresh();
  }

  /**
   * Toggle disabled status
   *
   * @param itemId
   * @param navigationName
   */
  toggleDisabled(itemId: string, navigationName: string): void {
    // Get the component -> navigation data -> item
    const navComponent =
      this._mskNavigationService.getComponent<MskVerticalNavigationComponent>(
        navigationName,
      );

    // Return if the navigation component does not exist
    if (!navComponent) {
      return;
    }

    // Get the navigation item, update the badge and refresh the component
    const navigation = navComponent.navigation;
    const item = this._mskNavigationService.getItem(itemId, navigation);
    if (item) {
      item.disabled = !item.disabled;
    }
    navComponent.refresh();
  }
}
