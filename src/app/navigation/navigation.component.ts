import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';

@Component({
  selector: 'seed-navigation',
  templateUrl: './navigation.component.html',
  styles: [require('./navigation.component.scss')]
})
export class NavigationComponent {

  constructor(
    private translate: TranslateService
  ) { }

  setLanguage(lang: string) {
    this.translate.use(lang);
  }

}
