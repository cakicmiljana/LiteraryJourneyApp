import { createReducer, on } from "@ngrx/store"
import * as Actions from './book.action'

export const initialState = {
    books: [],
    selectedBook: -1,
}

export const booksReducer = createReducer(
    initialState,
    on(Actions.selectBook, (state, {bookID}) => {
        return {
            ...state,
            selectedBook: bookID
        }
    })
)