import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';

class LanguageItem {
  key: string;
  name: string;
}

@Component({
  selector: 'seed-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  isCollapsed: boolean = true;

  languages: LanguageItem[] = [
    {
      key: 'de',
      name: 'Deutsch'
    }, {
      key: 'en',
      name: 'English'
    }
  ];

  constructor(private translate: TranslateService) { }

  setLanguage(lang: string) {
    this.translate.use(lang);
  }

}
