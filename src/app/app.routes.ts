import { Routes } from '@angular/router';

import { HomeComponent } from './home';
import { AboutComponent } from './about';

export const AppRoutes: Routes = [
  // #/ -> #/home
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // #/home
  { path: 'home', component: HomeComponent },
  // #/about
  { path: 'about', component: AboutComponent },
  // #/xyz -> #/home
  { path: '**', redirectTo: 'home' }
];
