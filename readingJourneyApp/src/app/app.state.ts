import { Theme } from "./models/theme";
import { User } from "./models/user";
import { ThemesState } from "./store/themes/themes.reducer";

export interface AppState {
    themes: ThemesState,
    // allThemes: Theme[],
    // selectedTheme: number
    // user?: User,
    // currentTheme?: number,
    // completedThemes?: number[],
}