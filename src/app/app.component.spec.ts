import { TestBed, inject } from '@angular/core/testing';
import { TranslateService } from 'ng2-translate/ng2-translate';

// Load the implementations that should be tested
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  class MockTranslateService {
    getBrowserLang(): string { return 'en'; }
    setDefaultLang(lang: string) { }
    use(lang: string) { }
  }

  // Provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: TranslateService, useClass: MockTranslateService },
        AppComponent
      ]
    })
  });

  it('should initialize the language',
    inject([AppComponent, TranslateService],
      (app: AppComponent, translate: TranslateService) => {
        spyOn(translate, 'use');
        spyOn(translate, 'setDefaultLang');
        app.initializeLanguage();
        expect(translate.use).toHaveBeenCalled();
        expect(translate.setDefaultLang).toHaveBeenCalledWith('en');
      }
    )
  );

});
