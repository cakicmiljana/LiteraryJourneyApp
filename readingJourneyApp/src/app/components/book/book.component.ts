import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { Book } from 'src/app/models/book';
import { AppState } from 'src/app/store/book.reducer';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  
  //book$: Observable<Book>;

  private _book: Book | null = null;

  constructor(private store: Store<AppState>) {
    
  }

  ngOnInit(): void {
    this.store.subscribe(state => {
      
    })
  }

  @Input()
  set book(value: Book) {
    this._book = value;
  }
}
