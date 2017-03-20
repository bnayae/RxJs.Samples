import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-observable-from-event',
  templateUrl: './observable-from-event.component.html',
  styleUrls: ['./observable-from-event.component.css']
})
export class ObservableFromEventComponent implements OnInit, AfterViewInit {

  total: number = 0;
  @ViewChild('btn') btnRef: ElementRef;

  constructor(){}

  ngAfterViewInit(){
    let inputs:Observable<MouseEvent> = 
                  Observable.fromEvent<MouseEvent>(
                          this.btnRef.nativeElement, 'click');
    inputs.subscribe(_ => this.total++);
  }

  ngOnInit() {
    // let btn = document.getElementById('btn');
    // // let inputs:Observable<MouseEvent> = 
    // //               Observable.fromEvent<MouseEvent>(
    // //                       this.btnRef.nativeElement, 'click');
    // let inputs:Observable<MouseEvent> = 
    //               Observable.fromEvent<MouseEvent>(
    //                       btn, 'click');
    // inputs.subscribe(_ => this.total++);
  }
}
