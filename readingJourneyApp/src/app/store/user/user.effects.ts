// import { Injectable } from '@angular/core'
// import { createEffect, Actions, ofType } from '@ngrx/effects'
// import { catchError, map, mergeMap, of } from 'rxjs'
// import { UsersService } from '../../services/users.service'
// import * as UserActions from './user.action'

// @Injectable()
// export class UserEffects {
    
//     constructor(private action$: Actions, private userService: UsersService) {

//     }
    
//     loadUser$ = createEffect(() => 
//         this.action$.pipe(
            
//         )
//     )

//     saveUser$ = createEffect(() => 
//     this.action$.pipe(
//         ofType(UserActions.updateUserInfo()),
//         mergeMap((user: User) =>
//             this.userService.saveUser(user.id).pipe(
//                 map(user => {
//                     (UserActions.updateUserInfoSuccess({user: user}))
//                 })
//             ) 
//         )
//     )
//     )
// }