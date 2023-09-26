import { Component, Output } from '@angular/core';
import { Theme } from 'src/app/models/theme';
import { Observable, of } from 'rxjs'
import { ThemesService } from '../../services/themes.service'

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent {
  theme$: Observable<Theme[]> = of([]);

  @Output() isDropdownOpen: boolean = false;

  constructor(private ThemesService: ThemesService) {

  }

  ngOnInit(): void {
    this.theme$ = this.ThemesService.getAllThemes();
  }

  
  booksDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

}
