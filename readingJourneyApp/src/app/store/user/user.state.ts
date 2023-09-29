import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { Theme } from "src/app/models/theme";
import { User } from "src/app/models/user";

export interface UserState extends EntityState<Theme> {
    user: User,
    currentTheme: Theme
}

const adapter=createEntityAdapter<Theme>();
export const initialState : UserState = adapter.getInitialState({
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
    }
})