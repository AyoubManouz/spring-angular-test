import { FormControl, ValidationErrors } from '@angular/forms';

export class FormValidators {
    // whitespace validation
  static notOnlyWhitespace(control: FormControl): ValidationErrors {
    return control.value != null && control.value.trim().length === 0
      ? { notOnlyWhitespace: true }
      : null;
  }
}
