import { TestBed, inject, ComponentFixture } from '@angular/core/testing';
import { BrowserModule }  from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavigationComponent } from './navigation';

// Load the implementations that should be tested
import { AppComponent } from './app.component';

class MockTranslateService {
  getBrowserLang(): string { return 'en'; }
  setDefaultLang(lang: string) { }
  use(lang: string) { }
}

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  // Provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavigationComponent
      ],
      imports: [
        BrowserModule,
        TranslateModule,
        NgbModule.forRoot(),
        RouterModule.forRoot([])
      ],
      providers: [
        { provide: TranslateService, useClass: MockTranslateService },
        { provide: APP_BASE_HREF, useValue: '/' },
        AppComponent
      ]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should initialize the language',
    inject([TranslateService],
      (translate: TranslateService) => {
        spyOn(translate, 'use');
        spyOn(translate, 'setDefaultLang');
        component.initializeLanguage();
        expect(translate.use).toHaveBeenCalled();
        expect(translate.setDefaultLang).toHaveBeenCalledWith('en');
      }
    )
  );

});
