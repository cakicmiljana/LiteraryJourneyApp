import { createAction, props } from '@ngrx/store'
import { Theme } from 'src/app/models/theme';
import { User } from 'src/app/models/user';

export const loginUser = createAction('Login User', props<{user: User}>);
export const loginUserSuccess = createAction('Login User Success', props<{user: User}>);
export const startJourney = createAction('Start Journey', props<{theme: Theme}>());