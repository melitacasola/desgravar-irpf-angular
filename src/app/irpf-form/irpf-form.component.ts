import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IrpfService } from '../services/irpf.service';
import { ResultadoIRPF } from '../models/resultadoIRPF-interface';
import { RouterOutlet } from '@angular/router';
import { devOnlyGuardedExpression } from '@angular/compiler';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-irpf-form',
  templateUrl: './irpf-form.component.html',
  imports: [ ReactiveFormsModule, NgFor],
  standalone: true,
  styleUrls: ['./irpf-form.component.css']
})
export class IrpfFormComponent {

  resultados: ResultadoIRPF | undefined;

  constructor(private irpfService: IrpfService) {}

  irpfForm= new FormGroup({
    renta: new FormControl('', [Validators.required, Validators.min(0)]),
    ppersonal: new FormControl('', [Validators.required, Validators.min(0)]),
    pempresa: new FormControl('', [Validators.required, Validators.min(0)]),
    pautonomo: new FormControl('', [Validators.required, Validators.min(0)])
    });

    // updateProfile()

  onSubmit(): void {
    console.warn(this.irpfForm.value);
    if (this.irpfForm.valid) {
      const { renta, ppersonal, pempresa, pautonomo } = this.irpfForm.value;

      // Asegurándonos de que no haya valores nulos o indefinidos
      const rentaValue = renta ? parseFloat(renta) : 0;
      const ppersonalValue = ppersonal ? parseFloat(ppersonal) : 0;
      const pempresaValue = pempresa ? parseFloat(pempresa) : 0;
      const pautonomoValue = pautonomo ? parseFloat(pautonomo) : 0;

      const desgravacion = this.irpfService.calcularIRPF(
        rentaValue,
        ppersonalValue,
        pempresaValue,
        pautonomoValue
      );
      console.warn(desgravacion); //retorna resultados ok no imprime
     
      this.resultados = desgravacion;
    }
  }

}