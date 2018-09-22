import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';

import { BookStoreService } from '../../shared/book-store.service';
import { BooksActionTypes } from '../actions/books.actions';
import * as booksActions from '../actions/books.actions';

/**
 * Effects offer a way to isolate and easily test side-effects within your application.
 */
@Injectable()
export class BooksEffects {

  @Effect()
  loadBook$ = this.actions$.pipe(
    ofType(BooksActionTypes.LoadBooks),
    switchMap(() => this.bs.getAll()),
    mergeMap(() => this.bs.getAll().pipe(
      map(books => new booksActions.LoadBooksSuccess(books)),
      catchError(err => of(new booksActions.LoadBooksFail(err)))
    ))
  );

  constructor(
    private actions$: Actions,
    private bs: BookStoreService,
  ) { }
}
