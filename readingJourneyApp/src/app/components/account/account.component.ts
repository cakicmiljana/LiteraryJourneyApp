import { Component } from '@angular/core';
import { Theme } from 'src/app/models/theme';
import { User } from 'src/app/models/user';
import { ThemesService } from 'src/app/services/themes.service';
import { Observable, of } from 'rxjs';
import { Book } from 'src/app/models/book';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store'
import { selectCompletedBooksFeature, selectCompletedBooksList, selectCompletedThemesFeature, selectCompletedThemesList, selectCurrentThemeFeature, selectUserFeature } from 'src/app/store/user/user.selector';
import { completeBook, completeTheme } from 'src/app/store/user/user.action';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  user: Observable<User> = of();
  username: string = '';
  password: string = '';
  country: string = '';

  currentJourney: Theme | null = null;
  completedBook$: Observable<Book[]> = of([]);
  completedBooksNumber: number = 0;

  completedJourney$: Observable<Theme[]> | null = of([]);
  journeyCompleted: boolean = false;

  constructor(private ThemesService: ThemesService, private store: Store<AppState>) {
    
  }
  
  ngOnInit(): void {
    
    this.user = this.store.select(selectUserFeature);
    this.completedJourney$ = this.store.select(selectCompletedThemesList)
    this.completedBook$ = this.store.select(selectCompletedBooksList);
    
    this.store.select(selectCurrentThemeFeature).subscribe((state) => {
      this.currentJourney=state
    })

    this.user.subscribe(user => {
      this.username = user.username;
      this.password = user.password;
      this.country = user.country;
    })
  }

  completeBook(book: Book) {
    this.store.dispatch(completeBook({book}))
    this.completedBooksNumber++;

    if(this.currentJourney && this.completedBooksNumber === this.currentJourney.books.length) {
      this.journeyCompleted = true;

      this.completeJourney(this.currentJourney);

      this.currentJourney=null;
    }
  }

  completeJourney(theme: Theme) {
    
    this.store.dispatch(completeTheme({theme}))
  }
}
