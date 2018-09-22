import { Action } from '@ngrx/store';

import { Book } from '../../shared/book';
import { HttpErrorResponse } from '@angular/common/http';

export enum BooksActionTypes {
  LoadBooks = '[Books] Load all books',
  LoadBooksSuccess = '[Books] Load all books success',
  LoadBooksFail = '[Books] Load all books fail'
}

export class LoadBooks implements Action {
  readonly type = BooksActionTypes.LoadBooks;
}

export class LoadBooksSuccess implements Action {
  readonly type = BooksActionTypes.LoadBooksSuccess;
  constructor(public payload: Book[]) { }
}

export class LoadBooksFail implements Action {
  readonly type = BooksActionTypes.LoadBooksFail;
  constructor(public payload: HttpErrorResponse) { }
}


/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type BooksActions =
  | LoadBooks
  | LoadBooksSuccess
  | LoadBooksFail;
