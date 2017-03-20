import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';
import {WebSocketService} from './../../shared/websocket-service/websocket-service';
import { LogMessage } from '.';
//import { List, Map } from 'immutable';
import * as Immutable from 'immutable';

import * as rx from 'rxjs';
// import 'rxjs/Rx' // import all rxjs
import 'rxjs/add/observable/interval'

@Component({
  selector: 'websocket',
  templateUrl: './websocket.component.html',
  styleUrls: ['./websocket.component.css'],
  providers: [WebSocketService]
})
export class websocketComponent implements OnInit {

  items: LogMessage[] = [];
  subject: rx.Subject<MessageEvent>; // needed for sending messages
  constructor(private _wsService: WebSocketService) { }

  ngOnInit() : void {
    this.subject = this._wsService.connect("ws://localhost:4567/Log"); 
    this.subject
        .map(m => <LogMessage>JSON.parse(m.data))
        //.map(m => m.data)
        .subscribe(
      item => {
        this.items.splice(0, 0, item);
        if (this.items.length > 10) {
          this.items.pop();
        }
      },
      ex => console.log(ex), // error is handled for the entoire pipe-line
      () => {});
  }
}
