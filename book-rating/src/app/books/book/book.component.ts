import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent {

  @Input() book: Book;
  @Output() rate = new EventEmitter<Book>();
  // Output: showDetails

  constructor(private ratingService: BookRatingService) {
  }

  rateDown() {
    const ratedBook = this.ratingService.rateDown(this.book);
    this.rate.emit(ratedBook);
  }

  rateUp() {
    const ratedBook = this.ratingService.rateUp(this.book);
    this.rate.emit(ratedBook);
  }
}
