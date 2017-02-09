import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NavigationComponent } from './navigation';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot(),
    TranslateModule.forRoot(),
    routing
  ]
})
export class AppModule { }
