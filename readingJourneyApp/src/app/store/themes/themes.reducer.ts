import { createReducer, on } from '@ngrx/store'
import * as Actions from './themes.action'
import { Theme } from '../../models/theme'
import { User } from '../../models/user'

export interface ThemesState {
    allThemes: Theme[],
    selectedTheme: number,
    currentTheme?: number,
    completedThemes?: number[],
}

export const initialState : ThemesState = {
    allThemes: [],
    selectedTheme: -1
}

export const ThemesReducer=createReducer(
    initialState,
    on(Actions.selectTheme, (state, {themeId}) => {
        return {
            ...state,
            selectedTheme: themeId
        }
    })
)