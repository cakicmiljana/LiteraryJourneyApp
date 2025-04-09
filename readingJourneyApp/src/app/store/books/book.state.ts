import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { Book } from "src/app/models/book";


export interface BooksState extends EntityState<Book>{

}

export const adapter = createEntityAdapter<Book>();
export const initialState : BooksState = adapter.getInitialState({

});