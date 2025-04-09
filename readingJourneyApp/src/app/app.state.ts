import { Theme } from "./models/theme";
import { User } from "./models/user";
import { BooksState } from "./store/books/book.state";
import { ThemesState } from "./store/themes/themes.state";
import { UserState } from "./store/user/user.state";

export interface AppState {
    books: BooksState,
    themes: ThemesState,
    user: UserState
    // allThemes: Theme[],
    // selectedTheme: number
    // user?: User,
    // currentTheme?: number,
    // completedThemes?: number[],
}