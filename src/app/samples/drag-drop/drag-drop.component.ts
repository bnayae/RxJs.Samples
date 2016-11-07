import { Component, OnInit } from '@angular/core';
import * as rx from 'rxjs';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let parent = document.getElementById('parent');
    let target = document.getElementById('dragable');
    var down: rx.Observable<MouseEvent> = rx.Observable.fromEvent<MouseEvent>(target, 'mousedown');
    var up: rx.Observable<MouseEvent> = rx.Observable.fromEvent<MouseEvent>(parent, 'mouseup');
    var move: rx.Observable<MouseEvent> = rx.Observable.fromEvent<MouseEvent>(parent, 'mousemove');

    var query: rx.Observable<MouseEvent> = down.map(m => move.takeUntil(up))
      .switch();
    //.flatMap(m => m);

    query.subscribe(m => {   
      target.style.left = m.clientX + 'px';
      target.style.top = m.clientY + 'px';
    }, ex => { }, () => { alert('Never happens') })
  }

}
