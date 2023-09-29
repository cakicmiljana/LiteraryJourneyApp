import { Component } from '@angular/core';
import { Theme } from 'src/app/models/theme';
import { User } from 'src/app/models/user';
import { ThemesService } from 'src/app/services/themes.service';
import { Observable, of } from 'rxjs';
import { Book } from 'src/app/models/book';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store'
import { selectCurrentThemeFeature, selectUserFeature } from 'src/app/store/user/user.selector';

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
  finishedBooks: Book[] = [];

  completedJourneys: Theme[] | null = [];

  constructor(private ThemesService: ThemesService, private store: Store<AppState>) {
    
  }
  
  ngOnInit(): void {
    

    this.store.select(selectCurrentThemeFeature).subscribe((state) => {
      this.currentJourney=state
    })

    this.user=this.store.select(selectUserFeature);
    this.user.subscribe(user => {
      this.username = user.username;
      this.password = user.password;
      this.country = user.country;
    })
  }

  // UpdateAccountInfo() {
  //   this.user = {
  //     ...this.user,
  //     username: "new"
  //   };
  // }
}
