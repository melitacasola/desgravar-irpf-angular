import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ResultadoIRPF } from '../models/resultadoIRPF-interface';

@Component({
  selector: 'app-irpf-results',
  standalone: true,
  imports: [NgFor],
  templateUrl: './irpf-results.component.html',
  styleUrl: './irpf-results.component.css'
})
export class IrpfResultsComponent {
  @Input() resultados: ResultadoIRPF| undefined;
}
