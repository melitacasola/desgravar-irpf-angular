import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IrpfFormComponent } from './irpf-form/irpf-form.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IrpfFormComponent,TranslateModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'IRPF-angular';

  selectedLanguage = 'es';

  constructor(private translateService: TranslateService){}

  onLanguageChange() {
    this.translateService.use(this.selectedLanguage)
  }
}
