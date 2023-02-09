import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function emailOrPhoneReq(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value == '-1'
      ? { emailOrPhoneRequired: { value: control.value } }
      : null;
  };
}
