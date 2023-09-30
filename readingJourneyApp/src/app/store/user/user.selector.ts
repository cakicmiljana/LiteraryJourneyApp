import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.state'

export const selectUserFeature = createSelector(
  (state: AppState) => state.user.user,
  (user) => user
);

export const selectCurrentThemeFeature = createSelector(
  (state: AppState) => state.user.currentTheme,
  (currentTheme) => currentTheme
);

export const selectCompletedBooksFeature = createSelector(
  (state: AppState) => state.user.completedBooks,
  (completedBooks) => completedBooks
);