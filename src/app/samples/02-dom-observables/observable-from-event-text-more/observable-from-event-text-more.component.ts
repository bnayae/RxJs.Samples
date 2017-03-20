import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms' // use of form control
import * as rx from 'rxjs';

// import { Observable } from 'rxjs/Observable';
// import "rxjs/Subject";
// import 'rxjs/add/observable/interval'
// import 'rxjs/add/observable/fromEvent'
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/scan';
// import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/operator/startWith';

@Component({
  selector: 'app-observable-from-event-text-more',
  templateUrl: './observable-from-event-text-more.component.html',
  styleUrls: ['./observable-from-event-text-more.component.css']
})
export class ObservableFromEventTextMoreComponent implements OnInit {

  source: FormControl = new FormControl();
  charCount:rx.Observable<number>;
  items:string[] = [];
  constructor() { }

  ngOnInit() {
    let texts:rx.Observable<string> = this.source.valueChanges;
    this.charCount = texts.map(m => m.length);
    texts.subscribe(text => this.items.push(text),
                    ex => console.log(ex));
  }
}
