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
)

// export const selectSelectedBook = createSelector(
//   selectBooksFeature,
//   selectAllBooksFeature,
//   (state, books) => books
//     .find(book => book.id == state.selectedBook)
// )

export const selectBookById = (id: string | null) => createSelector(
  selectAllBooksFeature,
  (books) => books
    .find(book => book.id == id )
)