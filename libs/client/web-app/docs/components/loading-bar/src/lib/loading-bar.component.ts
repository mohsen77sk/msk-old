import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MskLoadingBarService } from '@msk/client/shared/ui/loading-bar';
import { finalize } from 'rxjs';

@Component({
  selector: 'msk-docs-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoadingBarComponent {
  apiCallStatus = '-';
  mode: 'determinate' | 'indeterminate' = 'indeterminate';
  sliderValue = 0;

  /**
   * Constructor
   */
  constructor(
    private _httpClient: HttpClient,
    private _mskLoadingService: MskLoadingBarService,
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Show the loading bar
   */
  showLoadingBar(): void {
    this._mskLoadingService.show();
  }

  /**
   * Hide the loading bar
   */
  hideLoadingBar(): void {
    this._mskLoadingService.hide();
  }

  /**
   * Set the auto mode
   *
   * @param change
   */
  setAutoMode(change: MatSlideToggleChange): void {
    this._mskLoadingService.setAutoMode(change.checked);
  }

  /**
   * Make a fake API call
   */
  makeAPICall(): void {
    this.apiCallStatus = 'Waiting...';

    this._httpClient
      .get('https://jsonplaceholder.typicode.com/posts?_delay=2000')
      .pipe(
        finalize(() => {
          this.apiCallStatus = 'Finished!';
        }),
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  /**
   * Toggle the mode
   */
  toggleMode(): void {
    // Show the loading bar
    this._mskLoadingService.show();

    // Set the mode
    this.mode = this.mode === 'indeterminate' ? 'determinate' : 'indeterminate';
    this._mskLoadingService.setMode(this.mode);
  }

  /**
   * Set the progress
   */
  setProgress(): void {
    this._mskLoadingService.setProgress(this.sliderValue);
  }
}
