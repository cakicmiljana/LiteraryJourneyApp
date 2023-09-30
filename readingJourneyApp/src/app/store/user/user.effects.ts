import { Injectable } from '@angular/core'
import { createEffect, Actions, ofType } from '@ngrx/effects'
import { catchError, map, mergeMap, of, switchMap, tap } from 'rxjs'
import { UsersService } from '../../services/users.service'
import * as UserActions from './user.action'

@Injectable()
export class UserEffects {
    
    constructor(private action$: Actions, private userService: UsersService) {

    }
    
    loginUser$ = createEffect(() => 
    this.action$.pipe(
        tap( () => {
            console.log("user effect")
        }), 
        ofType(UserActions.Login),
        switchMap((action) => 
            this.userService.loginUser(action.username, action.password).pipe(
                tap((user) => {
                    console.log("user: ", user)
                }),
                map((user) => UserActions.LoginSuccess({user: user})),
                catchError(() => of({ type: 'load error'}))
            )
        )
    ))
}