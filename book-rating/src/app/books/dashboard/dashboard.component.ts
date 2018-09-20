import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush // VORSICHT: funktioniert bei AJAX nicht mehr
})
export class DashboardComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookStoreService: BookStoreService) { }

  updateAndSortBooks(book: Book) {
    this.books = this.books
      .map(b => b.isbn === book.isbn ? book : b)
      .sort((a, b) => b.rating - a.rating);
  }

  ngOnInit() {
    this.bookStoreService.getAll().subscribe((books) => {
      this.books = books;
    });
  }

  addBook(book: Book) {
    this.books = [...this.books, book];
  }
}
