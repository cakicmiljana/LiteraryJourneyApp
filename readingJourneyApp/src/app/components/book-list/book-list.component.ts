import { Component, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';
import { AppState } from 'src/app/store/book.reducer';
import { Observable, of, tap } from 'rxjs'
import { SafeUrl, DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  @Input() books: Book[] | null = null;
  book$: Observable<Book[]> = of([]);
  selectedBook: number = 0;
  @Output() isDropdownOpen: boolean = false;
  
  booksDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  private _book: Book | null = null;

  constructor(private store: Store<AppState>, private BooksService: BooksService, private sanitizer: DomSanitizer) {
    
  }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.selectedBook = state.selectedBook
    })
    this.book$ = this.BooksService.getAll().pipe(
      tap( books => {
        return books.map(book => {
          book.id,
          book.title,
          book.author,
          this.sanitizer.bypassSecurityTrustResourceUrl(book.externalLink),
          book.coverPath
        })
      })
    );
  }

  @Input()
  set book(value: Book) {
    this._book = value;
  }
}
