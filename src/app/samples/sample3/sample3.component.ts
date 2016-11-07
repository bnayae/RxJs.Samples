import { Component, OnInit } from '@angular/core';

//import { List, Map } from 'immutable';
import * as Immutable from 'immutable';

import { Observable } from 'rxjs/Observable';
//import 'rxjs/Rx' // import all rxjs
import 'rxjs/add/observable/interval'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switch';
import 'rxjs/add/operator/concatAll';

import { FormControl, FormGroup, Validators } from '@angular/forms' // use of form control
import { WikipediaService } from '../../shared/wikipedia-service';
// http://blog.thoughtram.io/angular/2016/01/06/taking-advantage-of-observables-in-angular2.html

@Component({
  selector: 'app-sample3',
  templateUrl: './sample3.component.html',
  styleUrls: ['./sample3.component.css']
})
export class Sample3Component implements OnInit {

  inputs: FormControl = new FormControl();
  reactorAsync:Observable<string[]>;

  constructor(private wiki:WikipediaService) { }

  ngOnInit() {
    this.reactorAsync = this.inputs.valueChanges
              .debounceTime(1000)
              .map(m => this.wiki.search(m))
              .switch();
  }
}
