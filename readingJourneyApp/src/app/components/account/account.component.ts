import { Component } from '@angular/core';
import { Theme } from 'src/app/models/theme';
import { User } from 'src/app/models/user';
import { ThemesService } from 'src/app/services/themes.service';
import { Observable, of } from 'rxjs';
import { Book } from 'src/app/models/book';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store'
import { selectCompletedBooksFeature, selectCompletedBooksList, selectCurrentThemeFeature, selectUserFeature } from 'src/app/store/user/user.selector';
import { completeBook } from 'src/app/store/user/user.action';

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

  completedJourneys: Theme[] | null = [];
  completedBooksNumber: number = 0;
  journeyCompleted: boolean = false;

  constructor(private ThemesService: ThemesService, private store: Store<AppState>) {
    
  }
  
  ngOnInit(): void {
    
    this.store.select(selectCurrentThemeFeature).subscribe((state) => {
      this.currentJourney=state
    })

    this.store.select(selectCompletedBooksFeature).subscribe(state => {
      this.user
    })

    this.user=this.store.select(selectUserFeature);
    this.user.subscribe(user => {
      
      this.username = user.username;
      this.password = user.password;
      this.country = user.country;
    })

    this.completedBook$ = this.store.select(selectCompletedBooksList);
    this.completedBook$.subscribe( books => {
      
    })
  }

  completeBook(book: Book) {
    this.store.dispatch(completeBook({book}))
    this.completedBooksNumber++;

    if(this.currentJourney && this.completedBooksNumber === this.currentJourney.books.length) {
      this.journeyCompleted = true;
    }
  }
}
