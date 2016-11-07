import { Component, OnInit } from '@angular/core';

//import { List, Map } from 'immutable';
import * as Immutable from 'immutable';

import { Observable } from 'rxjs/Observable';
//import 'rxjs/Rx' // import all rxjs
import 'rxjs/add/observable/fromEvent'

@Component({
  selector: 'app-observable-from-event',
  templateUrl: './observable-from-event.component.html',
  styleUrls: ['./observable-from-event.component.css']
})
export class ObservableFromEventComponent implements OnInit {

  inputs:Observable<MouseEvent>;
  total:number = 0;

  constructor() { }

  ngOnInit() {
    let btn = document.getElementById('input');

    this.inputs = Observable.fromEvent<MouseEvent>(btn, 'click');
    this.inputs.subscribe(_ => this.total++);
  }
}
