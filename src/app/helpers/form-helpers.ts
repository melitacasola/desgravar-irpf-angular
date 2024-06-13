import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

export function isValidField(form: FormGroup, field: string): boolean | null {
    return form.controls[field].errors && form.controls[field].touched;
  }
  
  export function getFieldError(form: FormGroup, field: string, translateService: TranslateService): string | null {
    if (!form.controls[field]) return null;
  
    const errors = form.controls[field].errors || {};
    for (const key in errors) {
      if (errors.hasOwnProperty(key)) {
        switch (key) {
          case 'required':
            return translateService.instant('Este campo es requerido');
          case 'min':
            return translateService.instant('El valor debe ser mayor o igual a 0');
          case 'max':
            return translateService.instant('El valor debe ser menor o igual a') + ` ${form.controls[field].getError('max').max}`;
          default:
            return null;
        }
      }
    }
    return null;
  }