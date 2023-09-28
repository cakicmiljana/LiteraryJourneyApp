import { createReducer, on } from '@ngrx/store'
import * as Actions from './themes.action'
import { Theme } from '../../models/theme'
import { User } from '../../models/user'
import { initialState } from './themes.state'

export const ThemesReducer = createReducer(
    initialState,
    on(Actions.selectTheme, (state, {theme}) => {
        return {
            ...state,
            selectedTheme: theme
        }
    })
)