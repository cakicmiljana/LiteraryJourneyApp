import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.state'

export const selectCurrentThemeFeature = createSelector(
  (state: AppState) => state.user.currentTheme,
  (currentTheme) => currentTheme
);