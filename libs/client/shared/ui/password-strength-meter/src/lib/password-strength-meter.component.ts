import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';

import { MskPasswordStrengthMeterService } from './password-strength-meter.service';
import { AvailableLangsIds } from 'scoped-translations';

@Component({
  selector: 'msk-password-strength-meter',
  templateUrl: './password-strength-meter.component.html',
  styleUrls: ['./password-strength-meter.component.scss'],
})
export class MskPasswordStrengthMeterComponent implements OnChanges {
  @Input() language!: AvailableLangsIds;
  @Input() password!: string;
  @Input() enableFeedback = false;
  @Input() colors: string[] = [];
  @Output() strengthChange = new EventEmitter<number>();

  passwordStrength: number | null = null;
  feedback: { warning: string | null; suggestions: string[] } | null = null;
  private _prevPasswordStrength: number | null = null;
  private _defaultColors = [
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
    private _mskPasswordStrengthMeterService: MskPasswordStrengthMeterService,
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
      return this.colors[0] ? this.colors[0] : this._defaultColors[0];
    }

    return this.colors[strength]
      ? this.colors[strength]
      : this._defaultColors[strength];
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
          this.password,
          this.language,
        );
        this.passwordStrength = result.score;
        this.feedback = result.feedback;
      } else {
        this.passwordStrength = this._mskPasswordStrengthMeterService.score(
          this.password,
          this.language,
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
