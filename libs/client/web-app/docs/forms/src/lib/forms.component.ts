import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'msk-docs-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormsComponent {
  formFieldHelpers: string[] = [''];
  fixedSubscriptInput = new FormControl('', [Validators.required]);
  dynamicSubscriptInput = new FormControl('', [Validators.required]);
  fixedSubscriptInputWithHint = new FormControl('', [Validators.required]);
  dynamicSubscriptInputWithHint = new FormControl('', [Validators.required]);

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Get the form field helpers as string
   */
  getFormFieldHelpersAsString(): string {
    return this.formFieldHelpers.join(' ');
  }
}
