import { Component, OnInit } from '@angular/core';
import * as rx from 'rxjs';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/Rx' // import all rxjs
// import 'rxjs/add/observable/fromEvent'
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/scan';
// import 'rxjs/add/operator/startWith';
// import 'rxjs/add/operator/combineLatest';

@Component({
  selector: 'app-observable-from-event-more',
  templateUrl: './observable-from-event-more.component.html',
  styleUrls: ['./observable-from-event-more.component.css']
})
export class ObservableFromEventMoreComponent implements OnInit {

  total:rx.Observable<number>;
  flights:rx.Observable<string>;

  constructor() { }

  ngOnInit() {    
    let landingElement = document.getElementById('landing');
    let takeoffElement = document.getElementById('takeoff');
    let landings:rx.Observable<number> = 
        rx.Observable.fromEvent<MouseEvent>(landingElement, 'click')
                    .map(_ => 1)
                    .startWith(0)                    
                    .scan((acc, val, index) => ++acc);
    let takeoffs:rx.Observable<number> = 
        rx.Observable.fromEvent<MouseEvent>(takeoffElement, 'click')
                    .map(_ => 1)
                    .startWith(0)                    
                    .scan((acc, val, index) => ++acc);

    this.flights = landings.combineLatest(takeoffs, 
                    (l, t) => "Lamdings = " + l + ", Takeoffs " + t);
  }
}
