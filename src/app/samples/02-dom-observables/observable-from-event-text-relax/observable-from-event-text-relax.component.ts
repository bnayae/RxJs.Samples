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
  selector: 'app-observable-from-event-text-relax',
  templateUrl: './observable-from-event-text-relax.component.html',
  styleUrls: ['./observable-from-event-text-relax.component.css']
})
export class ObservableFromEventTextRelaxComponent implements OnInit {

  source: FormControl = new FormControl();
  charCount:Observable<number>;
  items:string[] = [];
  constructor() { }

  ngOnInit() {
    let texts:Observable<string> = 
                  this.source.valueChanges 
    this.charCount = texts.map(m => m.length);
    let relax = texts.debounceTime(1000);
    relax.subscribe(text => this.items.push(text), 
                    ex => console.log(ex));
  }

}
