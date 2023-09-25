import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';
import { AppState } from 'src/app/store/book.reducer';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  books: Book[] = [];
  selectedBook: number = 0;
  

  private _book: Book | null = null;

  constructor(private store: Store<AppState>, private BooksService: BooksService) {
    
  }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.selectedBook = state.selectedBook
    })
    this.BooksService.getAll().subscribe(books => 
      this.books=books
    )
  }

  @Input()
  set book(value: Book) {
    this._book = value;
  }
}
