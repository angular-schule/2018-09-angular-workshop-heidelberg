import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class BookComponent implements OnInit {

  @Input() book: Book;

  ngOnInit() {
  }

}
