import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { mskAnimations } from '@msk/client/shared/animations';
import { MskAlertType } from '@msk/client/shared/ui/alert';

@Component({
  selector: 'msk-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: mskAnimations,
})
export class ForgotPasswordComponent implements OnInit {
  @ViewChild('forgotPasswordNgForm') forgotPasswordNgForm!: NgForm;

  forgotPasswordForm!: FormGroup;

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
    this.forgotPasswordForm = this._formBuilder.group({
      username: ['', Validators.required],
    });
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Send the reset link
   */
  sendResetLink(): void {
    // Return if the form is invalid
    if (this.forgotPasswordForm.invalid) {
      return;
    }

    // Disable the form
    this.forgotPasswordForm.disable();

    // Hide the alert
    this.showAlert = false;
  }
}
