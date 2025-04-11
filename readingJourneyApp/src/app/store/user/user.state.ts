import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { Book } from "src/app/models/book";
import { Theme } from "src/app/models/theme";
import { User } from "src/app/models/user";

export interface ReadBooksState extends EntityState<Book> {
    
}

export const booksAdapter=createEntityAdapter<Book>();

export interface CurrentBooksState extends EntityState<Book> {
    
}

export const currentBooksAdapter=createEntityAdapter<Book>();

export interface CompletedThemesState extends EntityState<Theme> {
    
}

export const CompletedThemesAdapter=createEntityAdapter<Theme>();

export interface UserState {
    user: User,
    currentTheme: Theme,
    currentBooks: CurrentBooksState,
    completedBooks: ReadBooksState,
    completedThemes: CompletedThemesState
    //createdThemeId: string ???
}

export const booksInitialState : ReadBooksState = booksAdapter.getInitialState();
export const completedThemesInitialState : CompletedThemesState = CompletedThemesAdapter.getInitialState();
export const initialState: UserState = {
    user: {
        id: -1, // ili ''
        username: "unknown",
        password: "unknown",
        country: "unknown",
        userType: "",
        themeIDs: [],
        books: [],
        statistics: {
            userId: "",
            genres: new Map<string, number>(),
            pages: new Map<string, number>(),
            authors: new Map<string, number>(),
            languages: new Map<string, number>(),
        }
    },
    currentTheme: {
        id: -1,
        title: '',
        books: [],
        genres: [],
        reviews: []
    },
    currentBooks: booksInitialState,
    completedBooks: booksInitialState,
    completedThemes: completedThemesInitialState
}