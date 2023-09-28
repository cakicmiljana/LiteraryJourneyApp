import { createAction, props } from '@ngrx/store'
import { Theme } from 'src/app/models/theme';

export const loadThemes = createAction('Load Themes');
export const loadThemesSuccess = createAction('Load Themes Success');
export const selectTheme = createAction('Select Theme', props<{theme: Theme}>());