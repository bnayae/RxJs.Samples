import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms' // use of form control
import * as rx from 'rxjs';
// import { List, Map } from 'immutable';
import * as Immutable from 'immutable';

@Component({
  selector: 'app-observable-from-event-text-fun',
  templateUrl: './observable-from-event-text-fun.component.html',
  styleUrls: ['./observable-from-event-text-fun.component.css']
})
export class ObservableFromEventTextFunComponent implements OnInit {

  source: FormControl = new FormControl();
  charCount: rx.Observable<number>;
  compact: rx.Observable<string>;
  stat: rx.Observable<string>;

  constructor() { }

  ngOnInit() {
    let texts: rx.Observable<string> = this.source.valueChanges;
    this.charCount = texts.map(m => m.length);

    let charStream: rx.Observable<string> = 
                  texts.map(m => m.slice(-1)); // last char

    this.compact = charStream
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
