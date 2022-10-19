import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class MskValidators {
  /**
   * Check for empty (optional fields) values
   *
   * @param value
   */
  static isEmptyInputValue(value: any): boolean {
    return value == null || value.length === 0;
  }

  /**
   * Must match validator
   *
   * @param controlPath A dot-delimited string values that define the path to the control.
   * @param matchingControlPath A dot-delimited string values that define the path to the matching control.
   */
  static mustMatch(
    controlPath: string,
    matchingControlPath: string
  ): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      // Get the control and matching control
      const control = formGroup.get(controlPath);
      const matchingControl = formGroup.get(matchingControlPath);

      // Return if control or matching control doesn't exist
      if (!control || !matchingControl) {
        return null;
      }

      // Delete the mustMatch error to reset the error on the matching control
      if (matchingControl.hasError('mustMatch')) {
        delete matchingControl.errors?.['mustMatch'];
        matchingControl.updateValueAndValidity();
      }

      // Don't validate empty values on the matching control
      // Don't validate if values are matching
      if (
        this.isEmptyInputValue(matchingControl.value) ||
        control.value === matchingControl.value
      ) {
        return null;
      }

      // Prepare the validation errors
      const errors = { mustMatch: true };

      // Set the validation error on the matching control
      matchingControl.setErrors(errors);

      // Return the errors
      return errors;
    };
  }

  /**
   * Iban validator
   *
   * @param control
   */
  static IranianIBAN(control: AbstractControl): ValidationErrors | null {
    // Return if control doesn't exist
    if (!control) {
      return null;
    }

    // Prepare the validation errors
    const errors = { iranianIBAN: true };

    // Return error if length of value is not 26
    // Return error if value is not matching in pattern
    if (control.value.length !== 26 || !/IR[0-9]{24}/.test(control.value)) {
      // Return the errors
      return errors;
    }

    let testString = control.value.substr(4);
    const d1 = control.value.charCodeAt(0) - 65 + 10;
    const d2 = control.value.charCodeAt(1) - 65 + 10;
    testString += d1.toString() + d2.toString() + control.value.substr(2, 2);

    // calculate module of iban to 97 if mod == 1 then iban is valid
    return iso7064Mod97_10(testString) === 1 ? null : errors;
  }
}

function iso7064Mod97_10(iban: string): number {
  let remainder: string = iban;
  let block: string;

  while (remainder.length > 2) {
    block = remainder.slice(0, 9);
    remainder = (parseInt(block, 10) % 97) + remainder.slice(block.length);
  }

  return parseInt(remainder, 10) % 97;
}
