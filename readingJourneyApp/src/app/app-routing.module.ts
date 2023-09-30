import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router'; // CLI imports router
import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { ThemesComponent } from './components/themes/themes.component';
import { AccountComponent } from './components/account/account.component';
import { AccountUpdateComponent } from './components/account-update/account-update.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: ThemesComponent },
  { path: 'account', component: AccountComponent},
  { path: 'account/update', component: AccountUpdateComponent },
  { path: 'login', component: LoginComponent }
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