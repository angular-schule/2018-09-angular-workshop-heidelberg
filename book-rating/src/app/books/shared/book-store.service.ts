import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  getAllHardcoded() {
    return [{
      isbn: '000',
      title: 'Angular',
      description: 'Tolles Buch',
      rating: 5
    },
    {
      isbn: '111',
      title: 'AngularJS',
      description: 'Altes Buch',
      rating: 3
    }
    ];
  }
}
