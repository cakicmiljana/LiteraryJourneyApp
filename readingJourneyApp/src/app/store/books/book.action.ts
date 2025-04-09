import { createAction, props } from '@ngrx/store';
import { Book } from 'src/app/models/book';

export const loadBooks = createAction('Load Books');
export const loadBooksSuccess = createAction('Load Books Success', props<{books: Book[]}>());
export const selectBook = createAction(
    'Select a Book', 
    props<{bookID: number}>());