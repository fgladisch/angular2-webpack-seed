import { TestBed, inject, ComponentFixture } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule, APP_BASE_HREF } from '@angular/common';

// Load the implementations that should be tested
import { NavigationComponent } from './navigation.component';
import { RouterModule } from '@angular/router';

class MockTranslateService {
  use(lang: string) { }
}

describe('NavigationComponent', () => {

  let fixture: ComponentFixture<NavigationComponent>;
  let component: NavigationComponent;

  // Provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationComponent],
      imports: [
        CommonModule,
        TranslateModule,
        RouterModule.forRoot([]),
        NgbModule.forRoot()
      ],
      providers: [
        { provide: TranslateService, useClass: MockTranslateService },
        { provide: APP_BASE_HREF, useValue: '/' },
        NavigationComponent
      ]
    });
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
  });

  it('should set the language to "de"',
    inject([TranslateService],
      (translate: TranslateService) => {
        spyOn(translate, 'use');
        component.setLanguage('de');
        expect(translate.use).toHaveBeenCalledWith('de');
      }
    )
  );

});
