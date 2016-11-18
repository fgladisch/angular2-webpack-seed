import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    this.initializeLanguage();
  }

  initializeLanguage() {
    let browserLang: string = this.translate.getBrowserLang();
    this.translate.setDefaultLang('en');
    this.translate.use(browserLang);
  }

}
