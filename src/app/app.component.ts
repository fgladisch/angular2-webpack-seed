import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';

@Component({
  selector: 'app',
  pipes: [],
  providers: [],
  directives: [],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.template.html',
  styles: [require('./app.style.scss')]
})
export class App {

  constructor(
    private translate: TranslateService
  ) {
    this.setLang();
  }

  setLang() {
    var userLang = navigator.language.split('-')[0];
    userLang = /(de|en)/gi.test(userLang) ? userLang : 'en';
    this.translate.setDefaultLang('en');
    this.translate.use(userLang);
  }

}
