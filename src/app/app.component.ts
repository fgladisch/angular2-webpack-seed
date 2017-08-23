import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'seed-app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    this.initializeLanguage();
  }

  initializeLanguage() {
    const lang = this.translate.getBrowserLang();
    this.translate.setDefaultLang('en');
    this.translate.use(lang);
  }

}
