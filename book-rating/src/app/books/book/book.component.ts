import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  @Input() book: Book;
  @Output() rate = new EventEmitter<Book>();

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
