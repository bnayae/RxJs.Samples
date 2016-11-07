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
  selector: 'app-sample7',
  templateUrl: './sample7.component.html',
  styleUrls: ['./sample7.component.css']
})
export class Sample7Component implements OnInit {

  coldA:string = 'empty';
  coldB:string = 'empty'; 
  hotA:string = 'empty';
  hotB:string = 'empty';
  constructor() { }

  ngOnInit() {
    var coldStream:Observable<number> = Observable.interval(1000);
    coldStream.subscribe(m => this.coldA = 'Cold A = ' + m);

    var hotStream:Observable<number> = coldStream.publish().refCount();
    hotStream.subscribe(m => this.hotA = 'Hot A = ' + m);

    setTimeout(() => 
      {
          coldStream.subscribe(m => this.coldB = 'Cold B = ' + m);
          hotStream.subscribe(m => this.hotB = 'Hot B = ' + m);
      }, 5000);
  }

}
