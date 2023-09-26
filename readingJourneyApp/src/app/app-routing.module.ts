import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router'; // CLI imports router
import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { ThemesComponent } from './components/themes/themes.component';

const routes: Routes = [
  { path: '', component: ThemesComponent },
  { path: 'account', component: BookComponent }
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    
    }
  }