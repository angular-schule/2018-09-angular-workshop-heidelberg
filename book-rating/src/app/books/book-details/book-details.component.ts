import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from '../shared/book';
import { Observable, of, from, timer } from 'rxjs';
import { map, filter, reduce } from 'rxjs/operators';

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
    this.route.paramMap.subscribe(paramMap => {

      const isbn = paramMap.get('isbn');

      // via callbacks
      this.bookStore.getSingle(isbn).subscribe(
        book => this.book = book,
        error => console.error('Es gab nen Fehler', error),
        () => console.log('Nr. 1 Complete! 😀')
      );

      // via observer
      const observer = {
        next: book => console.log('Hui ein Buch', book),
        error: error => console.error('Es gab nen Fehler', error),
        complete: () => console.log('Nr. 2 Complete! 😀')
      };

      const myObservable$ = from([1, 2, 3, 4, 5]).
        pipe(
          filter(n => n % 2 === 0),
          map(n => n + 10),
          reduce((acc, item) => acc + item, 0)
        );


      myObservable$.subscribe(observer);


     });
  }
}
