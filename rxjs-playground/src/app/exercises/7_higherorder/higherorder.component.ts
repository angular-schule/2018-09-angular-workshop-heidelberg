import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ExerciseService } from '../exercise.service';
import { mergeMap, concatMap, switchMap, exhaustMap } from 'rxjs/operators';

@Component({
  selector: 'rxw-higherorder',
  templateUrl: './higherorder.component.html',
  styles: []
})
export class HigherorderComponent implements OnInit {

  logStream$ = new Subject<string>();
  source$ = new Subject<string>();
  result$: Observable<string>;

  constructor(private es: ExerciseService) { }

  ngOnInit() {

    /******************************/
    this.result$ = this.source$.pipe(
      // please try out:
      // - mergeMap
      // - concatMap
      // - switchMap
      // - exhaustMap
      switchMap(tier => this.es.echo(tier, 5))
    );

    /******************************/

    this.source$.subscribe(value => this.logStream$.next(`SOURCE: ${value}`));
    this.result$.subscribe(value => this.logStream$.next(`🚀 ${value}`));
  }

  echoTest() {
    this.es.echo('TEST', 3).subscribe(value => this.logStream$.next(value));
  }

  sendValue(value: string) {
    this.source$.next(value);
  }

}
