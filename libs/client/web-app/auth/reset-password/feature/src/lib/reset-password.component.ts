import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { mskAnimations } from '@msk/client/shared/animations';
import { MskConfigService } from '@msk/client/shared/services/config';
import { MskAlertType } from '@msk/client/shared/ui/alert';
import { MskValidators } from '@msk/client/shared/validators';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'msk-reset-password',
  templateUrl: './reset-password.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: mskAnimations,
})
export class ResetPasswordComponent implements OnInit {
  @ViewChild('resetPasswordNgForm') resetPasswordNgForm!: NgForm;

  resetPasswordForm!: UntypedFormGroup;

  showAlert = false;
  alert: { type: MskAlertType; message: string } = {
    type: 'success',
    message: '',
  };
  layoutLanguage!: any;

  private _unsubscribeAll: Subject<void> = new Subject();

  /**
   * Constructor
   */
  constructor(
    private _formBuilder: UntypedFormBuilder,
    private _mskConfigService: MskConfigService,
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Create the form
    this.resetPasswordForm = this._formBuilder.group(
      {
        password: ['', Validators.required],
        passwordConfirm: ['', Validators.required],
      },
      {
        validators: MskValidators.mustMatch('password', 'passwordConfirm'),
      },
    );

    // Subscribe to config changes
    this._mskConfigService.config$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config: any) => {
        // Store the layoutLanguage
        this.layoutLanguage = config.language;
      });
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Reset password
   */
  resetPassword(): void {
    // Return if the form is invalid
    if (this.resetPasswordForm.invalid) {
      return;
    }

    // Disable the form
    this.resetPasswordForm.disable();

    // Hide the alert
    this.showAlert = false;
  }
}
