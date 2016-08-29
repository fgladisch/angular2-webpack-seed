import { Home } from './home';
import { About } from './about';

export const Routes = [
  // #/ -> #/home
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // #/home
  { path: 'home', component: Home },
  // #/about
  { path: 'about', component: About },
  // #/xyz -> #/home
  { path: '**', redirectTo: 'home' }
];
