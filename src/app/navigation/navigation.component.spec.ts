import { TestBed, inject } from '@angular/core/testing';
import { TranslateService } from 'ng2-translate/ng2-translate';

// Load the implementations that should be tested
import { NavigationComponent } from './';

describe('NavigationComponent', () => {

  class MockTranslateService {
    use(lang: string) { }
  }

  // Provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: TranslateService, useClass: MockTranslateService },
        NavigationComponent
      ]
    })
  });

  it('should set the language to "de"',
    inject([NavigationComponent, TranslateService],
      (navigation: NavigationComponent, translate: TranslateService) => {
        spyOn(translate, 'use');
        navigation.setLanguage('de');
        expect(translate.use).toHaveBeenCalledWith('de');
      }
    )
  );

});
