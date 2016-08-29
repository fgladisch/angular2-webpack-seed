import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { App } from './app.component';
import { Routes } from './app.routes';
import { Home } from './home';
import { About } from './about';
import { Navigation } from './navigation';

@NgModule({
  bootstrap: [App],
  declarations: [
    App,
    Navigation,
    Home,
    About
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    TranslateModule.forRoot(),
    RouterModule.forRoot(Routes)
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class AppModule { }
