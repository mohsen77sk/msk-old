import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { mskAnimations } from '@msk/client/shared/animations';
import { MskAlertType } from '@msk/client/shared/ui/alert';

@Component({
  selector: 'msk-two-step-verification',
  templateUrl: './two-step-verification.component.html',
  styleUrls: ['./two-step-verification.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: mskAnimations,
})
export class TwoStepVerificationComponent implements OnInit {
  @ViewChild('towStepNgForm') towStepNgForm!: NgForm;

  towStepForm!: FormGroup;

  showAlert = false;
  alert: { type: MskAlertType; message: string } = {
    type: 'success',
    message: '',
  };

  /**
   * Constructor
   */
  constructor(private _formBuilder: FormBuilder) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Create the form
    this.towStepForm = this._formBuilder.group({
      code: ['', Validators.required],
    });
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Verification
   */
  verification(): void {
    // Return if the form is invalid
    if (this.towStepForm.invalid) {
      return;
    }

    // Disable the form
    this.towStepForm.disable();

    // Hide the alert
    this.showAlert = false;
  }
}
