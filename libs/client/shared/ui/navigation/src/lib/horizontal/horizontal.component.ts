import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { mskAnimations } from '@msk/client/shared/animations';
import { MskUtilsService } from '@msk/client/shared/services/utils';
import { MskNavigationService } from '../navigation.service';
import { MskNavigationItem } from '../navigation.types';

import { ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'msk-horizontal-navigation',
  templateUrl: './horizontal.component.html',
  styleUrls: ['./horizontal.component.scss'],
  animations: mskAnimations,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'mskHorizontalNavigation',
})
export class MskHorizontalNavigationComponent
  implements OnChanges, OnInit, OnDestroy
{
  @Input() name: string = this._mskUtilsService.randomId();
  @Input() navigation!: MskNavigationItem[];

  onRefreshed: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
  private _unsubscribeAll: Subject<void> = new Subject();

  /**
   * Constructor
   */
  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _mskNavigationService: MskNavigationService,
    private _mskUtilsService: MskUtilsService,
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On changes
   *
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    // Navigation
    if ('navigation' in changes) {
      // Mark for check
      this._changeDetectorRef.markForCheck();
    }
  }

  /**
   * On init
   */
  ngOnInit(): void {
    // Make sure the name input is not an empty string
    if (this.name === '') {
      this.name = this._mskUtilsService.randomId();
    }

    // Register the navigation component
    this._mskNavigationService.registerComponent(this.name, this);
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Deregister the navigation component from the registry
    this._mskNavigationService.deregisterComponent(this.name);

    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Refresh the component to apply the changes
   */
  refresh(): void {
    // Mark for check
    this._changeDetectorRef.markForCheck();

    // Execute the observable
    this.onRefreshed.next(true);
  }

  /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
  trackByFn(index: number, item: any): any {
    return item.id || index;
  }
}
