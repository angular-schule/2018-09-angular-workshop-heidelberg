import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    // Kindmodule müssen CommonModule importieren
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DashboardComponent,
    BookComponent,
    CreateBookComponent
  ],
  exports: [
    DashboardComponent
  ],
  // services providen (angular 5 way)
  providers: [
    // BookRatingService
  ]
})
export class BooksModule { }
