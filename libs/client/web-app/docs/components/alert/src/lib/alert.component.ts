import { Component, ViewEncapsulation } from '@angular/core';
import { MskAlertService } from '@msk/client/shared/ui/alert';

@Component({
  selector: 'msk-docs-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AlertComponent {
  /**
   * Constructor
   */
  constructor(private _mskAlertService: MskAlertService) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Dismiss the alert via the service
   *
   * @param name
   */
  dismiss(name: string): void {
    // Dismiss
    this._mskAlertService.dismiss(name);
  }

  /**
   * Show the alert via the service
   *
   * @param name
   */
  show(name: string): void {
    // Show
    this._mskAlertService.show(name);
  }
}
