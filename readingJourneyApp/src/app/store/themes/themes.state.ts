import { Theme } from "src/app/models/theme";

export interface ThemesState {
    allThemes: Theme[],
    // selectedTheme: number
}

export const initialState : ThemesState = {
    allThemes: []
    // selectedTheme: -1
}