import { Component, Input, Output } from '@angular/core';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store'
import { ThemesService } from '../../services/themes.service'
import { Theme } from 'src/app/models/theme';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent {
  @Input() theme!: Theme;
  @Output() isDropdownOpen: boolean = false;
  
  constructor(private store: Store<AppState>, private ThemesService: ThemesService) {

  }

  ngOnInit(): void {
    
  }

  
  themeDropdown(event: Event) {
    this.isDropdownOpen = !this.isDropdownOpen;
    event.stopPropagation();
  }
  
  preventClose(event: Event) {
    event.stopPropagation();
  }
}
