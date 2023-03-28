import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'msk-service-worker-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MskServiceWorkerSnackBarComponent {
  /**
   * constructor
   */
  constructor(
    private _swUpdate: SwUpdate,
    public sbRef: MatSnackBarRef<MskServiceWorkerSnackBarComponent>
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Reload
   */
  reload(): void {
    this._swUpdate.activateUpdate().then(() => document.location.reload());
  }
}
