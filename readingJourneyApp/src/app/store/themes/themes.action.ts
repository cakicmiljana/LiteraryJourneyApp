import { createAction, props } from '@ngrx/store'
import { Theme } from 'src/app/models/theme';

export const loadThemes = createAction('Load Themes');
export const loadThemesSuccess = createAction('Load Themes Success', props<{themes: Theme[]}>());
export const selectTheme = createAction('Select Theme', props<{theme: Theme}>());
export const RateJourney = createAction('Rate Journey', props<{journeyId: number, rating: number}>());