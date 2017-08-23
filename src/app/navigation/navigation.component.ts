import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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

  constructor(public translate: TranslateService) { }

  setLanguage(lang: string) {
    this.translate.use(lang);
  }

}
