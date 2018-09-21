import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from '../shared/book';
import { Observable, of, from, timer } from 'rxjs';
import { map, filter, reduce, tap, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book: Book;

  constructor(private route: ActivatedRoute,
    private bookStore: BookStoreService) { }

  ngOnInit() {

    this.route.paramMap.pipe(
      map(paramMap => paramMap.get('isbn')),
      mergeMap(isbn => this.bookStore.getSingle(isbn)),
      tap(x => console.log(x))
    ).subscribe(book => this.book = book);

  }
}
