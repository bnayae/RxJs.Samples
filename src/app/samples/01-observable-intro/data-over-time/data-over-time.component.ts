import { Component, OnInit } from '@angular/core';

//import { List, Map } from 'immutable';
import * as Immutable from 'immutable';

import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx' // import all rxjs
import 'rxjs/add/observable/interval'

@Component({
  selector: 'app-data-over-time',
  templateUrl: './data-over-time.component.html',
  styleUrls: ['./data-over-time.component.css']
})
export class DataOverTimeComponent implements OnInit {

  current: Observable<number>;
  items: number[] = [];
  constructor() { }

  ngOnInit() {
    const query: Observable<number> = Observable.interval(1000).take(6);

    this.current = query;
    // not cancellable
    let promise: Promise<void> = query.forEach(item => this.items.push(item));
     //promise.then(() => this.state = 'Done');
  }

}
