import { createAction, props } from '@ngrx/store'

export const loadThemes = createAction('Load Themes');
export const loadThemesSuccess = createAction('Load Themes Success');
export const selectTheme = createAction('Select Theme', props<{themeId: number}>());