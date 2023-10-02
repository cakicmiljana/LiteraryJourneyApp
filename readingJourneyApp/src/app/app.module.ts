import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { BookListComponent } from './components/book-list/book-list.component';
import { ThemesComponent } from './components/themes/themes.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AccountComponent } from './components/account/account.component';
import { AccountUpdateComponent } from './components/account-update/account-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ThemesReducer } from './store/themes/themes.reducer';
import { CurrentThemeComponent } from './components/current-theme/current-theme.component';
import { AppState } from './app.state';
import { ThemeComponent } from './components/theme/theme.component';
import { UserReducer } from './store/user/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ThemesEffects } from './store/themes/themes.effects';
import { LoginComponent } from './components/login/login.component';
import { UserEffects } from './store/user/user.effects';
import { FormsModule } from '@angular/forms';
import { RatingComponent } from './components/rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookListComponent,
    ThemesComponent,
    MenuBarComponent,
    AccountComponent,
    AccountUpdateComponent,
    CurrentThemeComponent,
    ThemeComponent,
    LoginComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    EffectsModule.forRoot([ThemesEffects, UserEffects]),
    StoreModule.forRoot<AppState>({themes: ThemesReducer, user: UserReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
    ReactiveFormsModule,
    MatProgressBarModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
