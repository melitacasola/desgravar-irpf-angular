import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ResultadoIRPF } from '../models/resultadoIRPF-interface';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-irpf-results',
  standalone: true,
  imports: [NgFor,TranslateModule,FormsModule],
  templateUrl: './irpf-results.component.html',
  styleUrl: './irpf-results.component.css'
})
export class IrpfResultsComponent {
  @Input() resultados: ResultadoIRPF| undefined;

  selectedLanguage = 'en';
  constructor(private translateService: TranslateService){}

  onLanguageChange() {
    this.translateService.use(this.selectedLanguage)
  }
}
