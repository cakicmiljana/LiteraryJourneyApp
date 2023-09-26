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
  selectedBook: number = 0;
  @Output() isDropdownOpen: boolean = false;
  @Output() isBiographyOn: boolean = false;
  
  booksDropdown(event: Event) {
    this.isDropdownOpen = !this.isDropdownOpen;
    event.stopPropagation();
  }

  preventClose(event: Event) {
    event.stopPropagation();
  }

  biographyOverlay() {
    this.isBiographyOn = !this.isBiographyOn;
    if(this.isBiographyOn) {
      document.getElementById("overlay")!.style.display = "block";
    }
    else {
      document.getElementById("overlay")!.style.display = "none";
    }
  }

  private _book: Book | null = null;

  constructor(private store: Store<AppState>, private BooksService: BooksService, private sanitizer: DomSanitizer) {
    
  }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.selectedBook = state.selectedBook
    })
  }

  @Input()
  set book(value: Book) {
    this._book = value;
  }
}
