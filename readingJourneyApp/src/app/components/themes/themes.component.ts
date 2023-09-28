import { Component, Input, Output } from '@angular/core';
import { Theme } from 'src/app/models/theme';
import { Observable, of } from 'rxjs'
import { ThemesService } from '../../services/themes.service'
import { AppState } from '../../app.state'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent {
  @Input() theme$: Theme[] = [];
  

  constructor(private store: Store<AppState>, private ThemesService: ThemesService) {

  }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.theme$ = state.themes.allThemes;
    })

    this.ThemesService.getAllThemes()
      .subscribe(themes => this.theme$=themes);
  }

  
  preventClose(event: Event) {
    event.stopPropagation();
  }

}
