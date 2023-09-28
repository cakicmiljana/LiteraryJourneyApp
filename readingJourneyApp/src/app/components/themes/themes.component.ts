import { Component, Input, Output } from '@angular/core';
import { Theme } from 'src/app/models/theme';
import { Observable, of } from 'rxjs'
import { ThemesService } from '../../services/themes.service'
import { ThemesState } from 'src/app/store/themes/themes.reducer'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent {
  theme$: Theme[] = [];

  @Output() isDropdownOpen: boolean = false;
  selectedTheme: number | null = null;
  

  constructor(private store: Store<ThemesState>, private ThemesService: ThemesService) {
    
  }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.theme$ = state.allThemes;
      this.selectedTheme = state.selectedTheme;
    })

    this.ThemesService.getAllThemes()
      .subscribe(themes => this.theme$=themes);
  }

  
  preventClose(event: Event) {
    event.stopPropagation();
  }
  

  booksDropdown(event: Event) {
    this.isDropdownOpen = !this.isDropdownOpen;
    event.stopPropagation();
  }

}
