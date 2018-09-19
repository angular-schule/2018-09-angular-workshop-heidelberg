import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  // services providen (angular 6 way)
  providedIn: 'root'
})
export class BookRatingService {

  private minRating = 1;
  private maxRating = 5;

  rateUp(book: Book) {
    return {
      ...book,
      rating: Math.min(this.maxRating, book.rating + 1)
    };
  }

  rateDown(book: Book) {
    return {
      ...book,
      rating: book.rating > this.minRating ? book.rating - 1 : this.minRating
    };
  }

  // TODO: rateUpAllowed / rateDownAllowed
}
