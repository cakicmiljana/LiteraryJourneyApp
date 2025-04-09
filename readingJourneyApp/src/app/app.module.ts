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
import { SignupComponent } from './components/signup/signup.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { RecommendationComponent } from './components/recommendation/recommendation.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BooksReducer } from './store/books/book.reducer';
import { BooksEffects } from './store/books/book.effects';

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
    RatingComponent,
    SignupComponent,
    LoginSignupComponent,
    RecommendationComponent,
    StatisticsComponent,
    AllBooksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    EffectsModule.forRoot([BooksEffects, ThemesEffects, UserEffects]),
    StoreModule.forRoot<AppState>({books: BooksReducer, themes: ThemesReducer, user: UserReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
    ReactiveFormsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    NgxChartsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
