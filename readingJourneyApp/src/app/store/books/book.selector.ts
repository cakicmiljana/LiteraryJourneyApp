import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/app.state";
import { Book } from "src/app/models/book";

export const selectBooksFeature = createSelector(
    (state: AppState) => state.books,
    (books) => books
)

export const selectAllBooksFeature = createSelector(
    selectBooksFeature,
    (books) => books.ids
        .map(id => books.entities[id])
        .filter(book => book != null)
        .map(book => <Book>book)
)

export const selectBooksList = createSelector(
  selectAllBooksFeature,
  (books) => books
);