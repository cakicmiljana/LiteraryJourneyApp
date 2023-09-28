import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.state'

export const selectAllThemesFeature = createSelector(
  (state: AppState) => state.themes.allThemes,
  (allThemes) => allThemes
);

export const selectThemesList = createSelector(
  selectAllThemesFeature,
  (themes) => themes
);

// export const selectSongsDict = createSelector(
//     selectSongsFeature,
//     (songs) => songs.list
// )

// export const selectSelectedThemeId = createSelector(
//   selectAllThemesFeature,
//   (theme) => themes.selectedTheme
// );

// export const selectSelectedSong = createSelector(
//   selectSongsList,
//   selectSelectedSongId,
//   (songs, songId) => songs.find((song) => song.id === songId)
// );
