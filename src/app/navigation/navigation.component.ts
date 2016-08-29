import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from 'ng2-translate/ng2-translate';

@Component({
  selector: 'navigation',
  pipes: [],
  providers: [],
  directives: [],
  templateUrl: './navigation.template.html',
  styles: [require('./navigation.style.scss')]
})
export class Navigation {

  constructor(
    private router: Router,
    private translate: TranslateService
  ) { }

  setLanguage(lang: string) {
    this.translate.use(lang);
  }

}
