import { Component, OnInit } from '@angular/core';

//import { List, Map } from 'immutable';
import * as Immutable from 'immutable';

import { Observable } from 'rxjs/Observable';
import { ISubscription } from 'rxjs/Subscription';
//import 'rxjs/Rx' // import all rxjs
import 'rxjs/add/observable/interval'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-data-over-time-pipeline',
  templateUrl: './data-over-time-pipeline.component.html',
  styleUrls: ['./data-over-time-pipeline.component.css']
})
export class DataOverTimePipelineComponent implements OnInit {

  current: Observable<string>;
  items: string[] = [];
  subscription: ISubscription;

  constructor() { }

  ngOnInit() {
    const query: Observable<string> = Observable.interval(300)
                        .filter(item => item % 2 == 0)
                        .map(item => '# ' + item + ' #')
                        .take(6);

    this.current = query;
    // pipe-line
    this.subscription = query                        
                        .subscribe(
                          item => this.items.push(item),
                          ex => console.log(ex), // error is handled for the entoire pipe-line
                          () => console.log('Done'));
                          
  }

}
