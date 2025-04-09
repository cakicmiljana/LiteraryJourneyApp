import { createReducer, on } from "@ngrx/store"
import * as Actions from './book.action'
import { adapter, initialState } from "./book.state"

// export interface AppState {
//     books: Book[],
//     selectedBook: number
// }

// export const initialState: AppState = {
//     books: [],
//     selectedBook: 0,
// }

export const BooksReducer = createReducer(
    initialState,
    on(Actions.selectBook, (state, {bookID}) => {
        return {
            ...state,
            selectedBook: bookID
        }
    }),
    on(Actions.loadBooksSuccess, (state, {books}) =>
        adapter.setAll(books, state)
    )
)