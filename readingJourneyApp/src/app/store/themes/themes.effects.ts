import { Injectable } from '@angular/core'
import { createEffect, Actions, ofType } from '@ngrx/effects'
import { catchError, map, mergeMap, of } from 'rxjs'
import { ThemesService } from '../../services/themes.service'
import * as ThemesActions from './themes.action'

@Injectable()
export class ThemesEffects {
    
    constructor(private action$: Actions, private themesService: ThemesService) {

    }
    
    loadTheme$ = createEffect(() => 
        this.action$.pipe(
            ofType(ThemesActions.loadThemes),
            mergeMap(() => 
                this.themesService.getAllThemes().pipe(
                    map((themes) => 
                        (ThemesActions.loadThemesSuccess({themes: themes}))),
                    catchError(() => of({ type: 'load error'}))
                )
            )
        )
    )
}