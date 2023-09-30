import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.state'
import { Book } from 'src/app/models/book';

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
  (books) => books
);

export const selectCompletedBooksList = createSelector(
  selectCompletedBooksFeature,
  (books) => books.ids
    .map(id => books.entities[id])
    .filter(book => book != null)
    .map(book => <Book>book)
);