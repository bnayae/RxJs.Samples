import { Component, OnInit } from '@angular/core';

//import { List, Map } from 'immutable';
import * as Immutable from 'immutable';

import { Observable } from 'rxjs/Observable';
import { ISubscription } from 'rxjs/Subscription';
//import 'rxjs/Rx' // import all rxjs
import 'rxjs/add/observable/interval'

@Component({
  selector: 'app-data-over-time-with-cancel',
  templateUrl: './data-over-time-with-cancel.component.html',
  styleUrls: ['./data-over-time-with-cancel.component.css']
})
export class DataOverTimeWithCancelComponent implements OnInit {

  current: Observable<number>;
  items: number[] = [];
  state:string = 'Active';
  subscription: ISubscription;

  constructor() { }

  ngOnInit() {
    const query: Observable<number> = Observable.interval(1000).take(6);

    this.current = query;
    // not cancellable
    //let promise: Promise<void> = query.forEach(item => this.items.push(item));
    //promise.then(() => this.state = 'Done');

    // cancellable
    this.subscription = query.subscribe(
                          item => this.items.push(item),
                          ex => console.log(ex),
                          () => this.state = 'Done');
                          
    setTimeout(() => this.subscription.unsubscribe(), 2500);
  }

}
