import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { Book } from "src/app/models/book";
import { Theme } from "src/app/models/theme";
import { User } from "src/app/models/user";

export interface BooksState extends EntityState<Book> {
    
}

export interface UserState {
    user: User,
    currentTheme: Theme,
    completedBooks: BooksState
}

const adapter=createEntityAdapter<Book>();  
export const booksInitialState : BooksState = adapter.getInitialState();
export const initialState: UserState = {
    user: {
        id: 0,
        username: "greg",
        password: "boo",
        country: "UK"
    },
    currentTheme: {
        id: -1,
        title: '',
        books: []
    },
    completedBooks: booksInitialState
}