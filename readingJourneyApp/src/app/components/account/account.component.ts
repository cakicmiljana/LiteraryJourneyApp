import { Component } from '@angular/core';
import { Theme } from 'src/app/models/theme';
import { User } from 'src/app/models/user';
import { ThemesService } from 'src/app/services/themes.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  user: User | null = {
    "id": 0,
    "username": "greg",
    "password": "boo",
    "country": "UK"
  };

  currentJourney$: Observable<Theme> | null = of();
  completedJourney$: Observable<Theme[]> | null = of();

  constructor(private ThemesService: ThemesService) {
    
  }
  
  ngOnInit(): void {
    this.currentJourney$ = this.ThemesService.getThemeById(1);
    this.completedJourney$ = this.ThemesService.getAllThemes();
    
  }
}
