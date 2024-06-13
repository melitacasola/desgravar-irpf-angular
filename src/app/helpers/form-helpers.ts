// src/app/form-helpers.ts
import { FormGroup } from '@angular/forms';

export function isValidField(form: FormGroup, field: string) {
  return form.controls[field].errors && form.controls[field].touched;
}

export function getFieldError(form: FormGroup, field: string): string | null {
  if (!form.controls[field]) return null;

  const errors = form.controls[field].errors || {};
  for (const key in errors) {
    if (errors.hasOwnProperty(key)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'min':
          return 'El valor debe ser mayor o igual a 0';
        case 'max':
          return `El valor debe ser menor o igual a ${form.controls[field].getError('max').max}`;
        default:
          return null;
      }
    }
  }
  return null;
}
