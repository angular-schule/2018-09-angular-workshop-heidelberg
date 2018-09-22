import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Book } from '../shared/book';
import { State } from '../store/reducers';
import { LoadBooks } from '../store/actions/books.actions';
import { getBooksLoading, getAllBooks } from '../store/selectors/books.selectors';
// import { getAllBooks, getBooksLoading } from '../store/selectors/books.selectors';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  books$: Observable<Book[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    // TODO_9: use selector getBooksLoading
    this.loading$ = this.store.pipe(
      select(getBooksLoading)
    );

    // TODO_12: use seletor for getAllBooks
    this.books$ = this.store.pipe(
      select(getAllBooks)
    );

    // TODO_5: trigger initial book list loading
    this.store.dispatch(new LoadBooks());
  }
}
