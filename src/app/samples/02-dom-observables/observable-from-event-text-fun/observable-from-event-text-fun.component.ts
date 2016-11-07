import { Component, OnInit } from '@angular/core';

//import { List, Map } from 'immutable';
import * as Immutable from 'immutable';

import { Observable } from 'rxjs/Observable';
//import 'rxjs/Rx' // import all rxjs
import "rxjs/Subject";
import 'rxjs/add/observable/interval'
import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/startWith';
import { FormControl, FormGroup, Validators } from '@angular/forms' // use of form control

@Component({
  selector: 'app-observable-from-event-text-fun',
  templateUrl: './observable-from-event-text-fun.component.html',
  styleUrls: ['./observable-from-event-text-fun.component.css']
})
export class ObservableFromEventTextFunComponent implements OnInit {

  source: FormControl = new FormControl();
  charCount: Observable<number>;
  compact: Observable<string>;
  stat: Observable<string>;

  constructor() { }

  ngOnInit() {
    let texts: Observable<string> = this.source.valueChanges;
    this.charCount = texts.map(m => m.length);

    let charStream:Observable<string> = 
                  texts.map(m => m.slice(-1));// last char

    this.compact =  charStream
                        .distinctUntilChanged()
                        .scan((acc, val) => acc + val); // aggregate

    // Immutable: https://www.npmjs.com/package/immutable
    //            https://facebook.github.io/immutable-js/docs/#/Map
    this.stat = charStream.scan(
      (acc, val, index) =>
        acc.update(val, 0, v => v + 1), // aggregation
        Immutable.Map<string, number>() /* initial value */)
        .map(acc => JSON.stringify(acc));
  }
}
