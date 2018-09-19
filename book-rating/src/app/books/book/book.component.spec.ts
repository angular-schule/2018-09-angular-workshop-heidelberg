import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';
import { BookRatingService } from '../shared/book-rating.service';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  let rateUpHasBeenCalled;
  const ratingMock = {
    rateUp: () => {
      rateUpHasBeenCalled = true;
    }
  };

  beforeEach(async(() => {
    rateUpHasBeenCalled = false;
    TestBed.configureTestingModule({
      declarations: [ BookComponent ],
      providers: [
        {
          provide: BookRatingService,
          useValue: ratingMock
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;

    component.book = {
      isbn: '000',
      title: 'HALLO UNIT TEST',
      description: '',
      rating: 1
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should forward the rateUp call to the book rating service', () => {
    component.rateUp();
    expect(rateUpHasBeenCalled).toBe(true);
  });
});
