import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function whiteSpaceValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const endsWithWhitespace = value.split('')[value.length - 1] === ' ';

    return endsWithWhitespace ? { finalWhiteSpace: true } : null;
  };
}
