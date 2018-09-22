import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'rxw-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styles: []
})
export class UnsubscribeComponent implements OnInit, OnDestroy {

  logStream$ = new Subject<string | number>();
  constructor() {}

  destroyed = false;

  ngOnInit() {
    const interval$ = timer(0, 1000);

    interval$.pipe(
      takeWhile(() => !this.destroyed)
    ).subscribe(
      msg => this.log(msg),
      err => this.log('ERROR: ' + err),
      () => this.log('COMPLETED')
    );
  }

  ngOnDestroy() {
    this.destroyed = true;

    this.logStream$.next('DESTROY');
  }


  log(msg: string | number) {
    console.log(msg);
    this.logStream$.next(msg);
  }
}
