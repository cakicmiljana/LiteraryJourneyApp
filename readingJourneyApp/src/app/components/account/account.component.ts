import { Component } from '@angular/core';
import { Theme } from 'src/app/models/theme';
import { User } from 'src/app/models/user';
import { ThemesService } from 'src/app/services/themes.service';
import { Observable, of } from 'rxjs';
import { Book } from 'src/app/models/book';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store'
import { selectCompletedBooksFeature, selectCompletedBooksList, selectCompletedThemesFeature, selectCompletedThemesList, selectCurrentThemeFeature, selectUserFeature } from 'src/app/store/user/user.selector';
import { Logout, completeBook, completeTheme } from 'src/app/store/user/user.action';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  user$: Observable<User> = of();
  user: User | null | undefined;
  username: string = "";
  country: string = '';

  currentJourney: Theme | null = null;
  completedBook$: Observable<Book[]> = of([]);
  completedBooksNumber: number = 0;
  
  completedJourney$: Observable<Theme[]> | null = of([]);
  journeyCompleted: boolean = false;
  
  constructor(private ThemesService: ThemesService, private store: Store<AppState>) {
    
  }
  
  ngOnInit(): void {
    this.user$ = this.store.select(selectUserFeature);
    this.user$.subscribe((state) => {
      this.user = state
      
      console.log("USER ", state)
      console.log("USERNAME ", this.user.username)
    })
    
    this.completedJourney$ = this.store.select(selectCompletedThemesList)
    this.completedBook$ = this.store.select(selectCompletedBooksList);
    
    this.completedBook$.subscribe((state) => {
      this.completedBooksNumber = state.length
    })
    
    this.store.select(selectCurrentThemeFeature).subscribe((state) => {
      this.currentJourney=state
    })
    
  }
  
  completeBook(book: Book) {
    this.store.dispatch(completeBook({book}))
    
    if(this.currentJourney && this.completedBooksNumber === this.currentJourney.books.length) {
      this.journeyCompleted = true;

      this.completeJourney(this.currentJourney);

      this.currentJourney=null;
    }
  }

  completeJourney(theme: Theme) {
    
    this.store.dispatch(completeTheme({theme}))
  }


  // LogOut() {
  //   this.store.dispatch(Logout());
  //   console.log("out ", this.user?.id)
  // }
}
