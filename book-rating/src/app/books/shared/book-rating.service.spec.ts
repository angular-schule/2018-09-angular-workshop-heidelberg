import { BookRatingService } from './book-rating.service';
import { Book } from './book';

fdescribe('BookRatingService', () => {

  let service: BookRatingService;
  let book: Book;

  beforeEach(() => {
    service = new BookRatingService();
    book = {
      isbn: '000', title: 'Test Book', description: 'Test', rating: 3
    };
  });

  it('it should rate up a book by one', () => {
    const ratedBook = service.rateUp(book);
    expect(ratedBook.rating).toBe(4);
  });

  it('it should rate down a book by one', () => {
    const ratedBook = service.rateDown(book);
    expect(ratedBook.rating).toBe(2);
  });

  // JIRA-5432
  // JIRA-8901 (exception for xmas shipping)
  it('should not be allowed to have a rating greater than 5', () => {
    book.rating = 5;
    const ratedBook = service.rateUp(book);
    expect(ratedBook.rating).toBe(5);
  });

  it('should not be allowed to have a rating smaller than 1', () => {
    book.rating = 1;
    const ratedBook = service.rateDown(book);
    expect(ratedBook.rating).toBe(1);
  });

  it('should always return a new book instance', () => {
    const ratedBook = service.rateUp(book);
    expect(ratedBook).not.toBe(book);
  });

});
