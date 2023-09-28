import { Component } from '@angular/core';
import { Theme } from 'src/app/models/theme';
import { User } from 'src/app/models/user';
import { ThemesService } from 'src/app/services/themes.service';
import { Observable, of } from 'rxjs';
import { Book } from 'src/app/models/book';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store'
import { selectCurrentThemeFeature } from 'src/app/store/user/user.selector';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  user: User = {
    "id": 0,
    "username": "greg",
    "password": "boo",
    "country": "UK"
  };

  currentJourney: Theme | null = null;
  finishedBooks: Book[] = [];

  completedJourneys: Theme[] | null = [];

  constructor(private ThemesService: ThemesService, private store: Store<AppState>) {
    
  }
  
  ngOnInit(): void {
    

    this.store.select(selectCurrentThemeFeature).subscribe((state) => {
      this.currentJourney=state
    })
  }

  UpdateAccountInfo() {
    this.user = {
      ...this.user,
      "username": "new"
    };
  }
}
