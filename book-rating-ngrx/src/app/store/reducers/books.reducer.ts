import { Book } from '../../shared/book';
import { BooksActions, BooksActionTypes } from '../actions/books.actions';

export interface BooksState {
  books: Book[];
  loading: boolean;
  selectedIsbn: string;
}

const initialState = {
  books: [],
  loading: false,
  selectedIsbn: null
};

export function booksReducer(state: BooksState = initialState, action: BooksActions): BooksState {
  switch (action.type) {

    case BooksActionTypes.LoadBooks: {
      return {
        ...state,
        loading: true
      };
    }

    case BooksActionTypes.LoadBooksSuccess: {
      return {
        ...state,
        books: action.payload,
        loading: false
      };
    }

    case BooksActionTypes.LoadBooksFail: {
      return {
        ...state,
        loading: false
      };
    }

    default: { return state; }
  }
}
