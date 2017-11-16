import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/merge';


import { map, distinctUntilChanged, filter } from 'rxjs/operators';
import { startWith } from 'rxjs/operators/startWith';
import { scan } from 'rxjs/operators/scan';
import { mapTo } from 'rxjs/operators/mapTo';

@Component({
  selector: 'gs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gs';
  version = '2.2.1';
  time;

  click$ = new Subject();

  constructor() {
    Observable.merge(
      Observable.interval(1000).pipe(mapTo('seconds')),
      this.click$.pipe(mapTo('minutes'))
    )
      .pipe(
        startWith(<any>new Date()),
        scan((acc: Date, curr: string) => {
          const result: Date = new Date(acc.getTime());
          if (curr === 'seconds') {
            result.setSeconds(acc.getSeconds() + 1);
          }

          if (curr === 'minutes') {
            result.setMinutes(acc.getMinutes() + 1);
          }
          return result;
        })
      )
      .subscribe(val => this.time = val);
  }
}
