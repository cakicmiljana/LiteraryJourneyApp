import { Component } from '@angular/core';
import { Theme } from 'src/app/models/theme';
import { User } from 'src/app/models/user';
import { ThemesService } from 'src/app/services/themes.service';
import { Observable, of } from 'rxjs';
import { Book } from 'src/app/models/book';

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

  currentJourney$: Observable<Theme> | null = of();
  finishedBooks: Book[] = [
    {
        "id": 4,
        "title": "Kora",
        "author": "Vasko Popa",
        "externalLink": "https://kontrastizdavastvo.rs/knjige/knjiga-kora-vasko-popa-27939",
        "coverPath": "../../../assets/kora.jpg"
    }];

  completedJourney$: Observable<Theme[]> | null = of();

  constructor(private ThemesService: ThemesService) {
    
  }
  
  ngOnInit(): void {
    this.currentJourney$ = this.ThemesService.getThemeById(1);
    this.completedJourney$ = this.ThemesService.getAllThemes();
    
  }

  UpdateAccountInfo() {
    this.user = {
      ...this.user,
      "username": "new"
    };
  }
}
