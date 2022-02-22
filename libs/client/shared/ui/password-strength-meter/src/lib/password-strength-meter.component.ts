import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';

import { MskPasswordStrengthMeterService } from './password-strength-meter.service';

@Component({
  selector: 'msk-password-strength-meter',
  templateUrl: './password-strength-meter.component.html',
  styleUrls: ['./password-strength-meter.component.scss'],
})
export class MskPasswordStrengthMeterComponent implements OnChanges {
  @Input() password!: string;
  @Input() enableFeedback = false;
  @Input() colors: string[] = [];
  @Output() strengthChange = new EventEmitter<number>();

  passwordStrength: number | null = null;
  feedback: { suggestions: string[]; warning: string } | null = null;
  private _prevPasswordStrength: number | null = null;
  private _defaultColours = [
    'darkred',
    'orangered',
    'orange',
    'yellowgreen',
    'green',
  ];

  /**
   * Constructor
   */
  constructor(
    private _mskPasswordStrengthMeterService: MskPasswordStrengthMeterService
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On changes
   *
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges) {
    // Password
    if (changes['password']) {
      // Calculate password strength
      this._calculatePasswordStrength();
    }
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Get meter fill color
   *
   * @param strength
   */
  getMeterFillColor(strength: number | null): string {
    if (!strength || strength < 0 || strength > 5) {
      return this.colors[0] ? this.colors[0] : this._defaultColours[0];
    }

    return this.colors[strength]
      ? this.colors[strength]
      : this._defaultColours[strength];
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Calculate password strength
   *
   * @private
   */
  private _calculatePasswordStrength(): void {
    if (!this.password) {
      this.passwordStrength = null;
      this.feedback = null;
    } else {
      if (this.enableFeedback) {
        const result = this._mskPasswordStrengthMeterService.scoreWithFeedback(
          this.password
        );
        this.passwordStrength = result.score;
        this.feedback = result.feedback;
      } else {
        this.passwordStrength = this._mskPasswordStrengthMeterService.score(
          this.password
        );
        this.feedback = null;
      }
    }

    // Only emit the passwordStrength if it changed
    if (this._prevPasswordStrength !== this.passwordStrength) {
      this.strengthChange.emit(this.passwordStrength ?? undefined);
      this._prevPasswordStrength = this.passwordStrength;
    }
  }
}
