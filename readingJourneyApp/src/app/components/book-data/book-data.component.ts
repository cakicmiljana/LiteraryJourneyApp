import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Book } from 'src/app/models/book';
import { selectBookById } from 'src/app/store/books/book.selector';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-book-data',
  templateUrl: './book-data.component.html',
  styleUrl: './book-data.component.scss'
})
export class BookDataComponent {
  bookId: string | null = "";
  book$: Observable<Book> = of();
  book: Book | undefined;
  link: string | undefined

  constructor(private store: Store<AppState>, private route: ActivatedRoute, private sanitizer: DomSanitizer) {
    
  }
    
  ngOnInit(): void {
    this.bookId = this.route.snapshot.paramMap.get("id");
    if (this.bookId && this.bookId.startsWith(":")) {
      this.bookId = this.bookId.slice(1);
    }

    this.store.select(selectBookById(this.bookId)).subscribe(book => {
      this.book = book
      if(this.book)
        this.link = this.sanitizer.bypassSecurityTrustResourceUrl(this.book.details.externalLink) as string
    })
    
    console.log(this.book)
    
  }
}
