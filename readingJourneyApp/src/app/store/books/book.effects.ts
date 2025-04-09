import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as BooksActions from './book.action'
import { BooksService } from "src/app/services/books.service";
import { catchError, map, mergeMap, of, tap } from 'rxjs'

@Injectable()
export class BooksEffects {

    constructor(private action$: Actions, private booksService: BooksService) {

    }

    loadBook$ = createEffect(() => 
        this.action$.pipe(
            ofType(BooksActions.loadBooks),tap((books) => console.log('Fetched books:', books)),
            mergeMap(() => 
                this.booksService.getAllBooks().pipe(
                    tap((books) => console.log('Fetched books:', books)),
                    map((books) => 
                        (BooksActions.loadBooksSuccess({books: books}))),
                    catchError(() => of({type: 'load error'})
                    )
                )
            )
        )
    )
}