import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush // VORSICHT: funktioniert bei AJAX nicht mehr
})
export class DashboardComponent implements OnInit {

  books: Book[] = [];
  books2: Observable<Book[]>;

  constructor(private bookStoreService: BookStoreService) { }

  updateAndSortBooks(book: Book) {
    this.books = this.books
      .map(b => b.isbn === book.isbn ? book : b)
      .sort((a, b) => b.rating - a.rating);
  }

  ngOnInit() {
    this.books2 = this.bookStoreService.getAll().pipe(share());
    this.books2.subscribe(books => this.books = books);
  }

  addBook(book: Book) {
    this.books = [...this.books, book];
  }
}
