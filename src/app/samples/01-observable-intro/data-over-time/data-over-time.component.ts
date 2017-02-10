import { Component, OnInit } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/observable/interval'
import * as rx from 'rxjs';

@Component({
  selector: 'app-data-over-time',
  templateUrl: './data-over-time.component.html',
  styleUrls: ['./data-over-time.component.css']
})
export class DataOverTimeComponent implements OnInit {

  current: rx.Observable<number>;
  items: number[] = [];
  constructor() { }

  ngOnInit() {
    const query: rx.Observable<number> = rx.Observable.interval(1000)
                                                .take(6);

    this.current = query;
    // not cancellable
    let promise: Promise<void> = query.forEach(item => this.items.push(item));
     //promise.then(() => this.state = 'Done');
  }
}
