import { Theme } from "src/app/models/theme";
import { User } from "src/app/models/user";

export interface UserState {
    user: User,
    currentTheme: Theme,
    completedThemes: Theme[],
}

export const initialState : UserState = {
    user: {
        id: -1,
        username: '',
        password: '',
        country: ''
    },
    currentTheme: {
        id: -1,
        title: '',
        books: []
    },
    completedThemes: []
}