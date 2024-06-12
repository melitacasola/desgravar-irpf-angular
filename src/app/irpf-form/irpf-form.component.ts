import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IrpfService } from '../services/irpf.service';
import { ResultadoIRPF } from '../models/resultadoIRPF-interface';
import { NgIf } from '@angular/common';
import { IrpfResultsComponent } from '../irpf-results/irpf-results.component';
import { IrpfNeeds } from '../models/irpf-needs.interface';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-irpf-form',
  templateUrl: './irpf-form.component.html',
  imports: [ReactiveFormsModule, NgIf, IrpfResultsComponent, TranslateModule,FormsModule],
  standalone: true,
  styleUrls: ['./irpf-form.component.css']
})

export class IrpfFormComponent {

  resultados: ResultadoIRPF | undefined;
  calcNeeds: IrpfNeeds | undefined;

  constructor(private irpfService: IrpfService, private translateService: TranslateService) { }
  selectedLanguage = 'es';

  onLanguageChange() {
    this.translateService.use(this.selectedLanguage)
  }

  irpfForm = new FormGroup({
    renta: new FormControl('', [Validators.required, Validators.min(0)]),
    ppersonal: new FormControl('', [Validators.required, Validators.min(0), Validators.max(1500)]),
    pempresa: new FormControl('', [Validators.required, Validators.min(0), Validators.max(8500)]),
    pautonomo: new FormControl('', [Validators.required, Validators.min(0), Validators.max(5750)])
  });



  onSubmit(): void {
    console.warn(this.irpfForm.value);

    if (this.irpfForm.valid) {
      const { renta, ppersonal, pempresa, pautonomo } = this.irpfForm.value;

      this.calcNeeds = {
        renta: renta ? parseFloat(renta) : 0,
        ppersonal: ppersonal ? parseFloat(ppersonal) : 0,
        pempresa: pempresa ? parseFloat(pempresa) : 0,
        pautonomo: pautonomo ? parseFloat(pautonomo) : 0
      }

      const desgravacion = this.irpfService.calcularIRPF(
        this.calcNeeds!
      );
      console.warn(desgravacion);

      this.resultados = desgravacion;
    }
  }

}