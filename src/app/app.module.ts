import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
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
    HttpModule,
    FormsModule,
    BrowserModule,
    TranslateModule.forRoot(),
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class AppModule { }
