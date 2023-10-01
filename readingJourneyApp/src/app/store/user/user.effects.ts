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
            ofType(UserActions.Login),
            mergeMap((action) => 
                this.userService.loginUser(action.username, action.password).pipe(
                    map((user) => (UserActions.LoginSuccess({user}))),
                    tap((user) => {
                        console.log("user from effect: ", user)
                    }),
                    catchError(() => of({ type: 'load error'}))
                )
            )
        ))
}