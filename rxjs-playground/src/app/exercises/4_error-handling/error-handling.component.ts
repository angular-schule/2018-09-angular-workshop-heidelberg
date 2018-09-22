import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../exercise.service';
import { Subject, throwError, of } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Component({
  selector: 'rxw-error-handling',
  templateUrl: './error-handling.component.html',
  styles: []
})
export class ErrorHandlingComponent implements OnInit {

  logStream$ = new Subject();

  constructor(private es: ExerciseService) { }

  ngOnInit() {
  }

  start() {
    this.es.randomError().pipe(
      retry(2),
      // catchError(err => throwError('This was an error...'))
      catchError(() => of('Was there an error?'))
    ).subscribe(
      value => this.logStream$.next(value),
      err => this.logStream$.next('💥 ERROR: ' + err)
    );
  }
}
