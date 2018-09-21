import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from '../shared/book';

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
      this.bookStore.getSingle(isbn).subscribe(book => this.book);

     });
  }

}
