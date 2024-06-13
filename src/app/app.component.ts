import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IrpfFormComponent } from './components/irpf-form/irpf-form.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormGroup, ReactiveFormsModule,FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IrpfFormComponent,TranslateModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'IRPF-angular';

  languageForm: FormGroup;

  constructor(private translateService: TranslateService) {
    this.languageForm = new FormGroup({
      languageSelect: new FormControl('en')
    });

    this.languageForm.get('languageSelect')?.valueChanges.subscribe(lang => {
      this.onLanguageChange(lang);
    });
  }
  
  onLanguageChange(lang: string) {
    this.translateService.use(lang);
  }
}
