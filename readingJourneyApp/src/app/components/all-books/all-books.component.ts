import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Book } from 'src/app/models/book';
import { loadBooks } from 'src/app/store/books/book.action';
import { selectAllBooksFeature, selectBooksFeature } from 'src/app/store/books/book.selector';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrl: './all-books.component.scss'
})
export class AllBooksComponent {
  book$: Observable<Book[]> = of([]);

  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
    console.log("booooooooks")
    this.store.dispatch(loadBooks());
    this.book$ = this.store.select(selectAllBooksFeature);
  }

  preventClose(event: Event) {
    event.stopPropagation();
  }
}
