import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, Observable } from 'rxjs';
import { MeasureValuesService } from './measure-values.service';
import { share } from 'rxjs/operators';

@Component({
  selector: 'rxw-multicast',
  templateUrl: './multicast.component.html',
  styles: []
})
export class MulticastComponent implements OnInit {

  measureValues$: Subject<number>;

  listeners = [];
  logStream$ = new Subject();

  constructor(private mvs: MeasureValuesService) { }

  ngOnInit() {
    /*******************************/

    // 1. unchanged stream
    // this.measureValues$ = this.mvs.getValues();

    // 2. multicasts (shares) the original Observable, uses Subject() internally
    // this.measureValues$ = this.mvs.getValues().pipe(share());

    // 3. please try out:
    // - Subject
    // - BehaviorSubject
    // - ReplaySubject
    this.measureValues$ = new ReplaySubject<number>();
    this.mvs.getValues().subscribe(this.measureValues$);

    /*******************************/
  }

  addListener() {
    this.listeners.push(this.mvs.generateRandomString(5));
  }

  addConsoleListener() {
    const randomString = this.mvs.generateRandomString(5);
    // this.measureValues$.subscribe(e => console.log(randomString, e));
    this.measureValues$.subscribe(e => this.logStream$.next(`${randomString} ${e}`));
  }

}
