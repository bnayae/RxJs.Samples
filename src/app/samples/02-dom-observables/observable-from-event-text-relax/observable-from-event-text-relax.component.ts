import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms' // use of form control
import * as rx from 'rxjs';

@Component({
  selector: 'app-observable-from-event-text-relax',
  templateUrl: './observable-from-event-text-relax.component.html',
  styleUrls: ['./observable-from-event-text-relax.component.css']
})
export class ObservableFromEventTextRelaxComponent implements OnInit {

  source: FormControl = new FormControl();
  charCount:rx.Observable<number>;
  items:string[] = [];
  constructor() { }

  ngOnInit() {
    let texts:rx.Observable<string> = 
                  this.source.valueChanges 

    this.charCount = texts.map(m => m.length);
    
    let relax = texts.debounceTime(1000);
    relax.subscribe(text => this.items.push(text), 
                    ex => console.log(ex));
  }

}
