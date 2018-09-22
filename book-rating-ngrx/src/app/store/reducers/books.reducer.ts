import { Book } from '../../shared/book';
import { BooksActions, BooksActionTypes } from '../actions/books.actions';

// TODO_1: implement BooksState
export interface BooksState {
  books: Book[];
  loading: boolean;
  selectedIsbn: string;
}

// TODO_2: define initial values
const initialState = {
  books: [],
  loading: false,
  selectedIsbn: null
};

export function booksReducer(state: BooksState = initialState, action: BooksActions): BooksState {
  switch (action.type) {

    // TODO_6: reducer for LoadBooks
    case BooksActionTypes.LoadBooks:
      return {
        ...state,
        loading: true
      };

    // TODO_11: reducer for LoadBooksSuccess
    case BooksActionTypes.LoadBooksSuccess:
      return {
        ...state,
        books: action.payload,
        loading: false
      };

    // TODO later: reducer for LoadBooksFail

    default: { return state; }
  }
}
