import { Component, OnInit } from '@angular/core';
import { WikipediaService } from '../../shared/wikipedia-service';

// http://blog.thoughtram.io/angular/2016/01/06/taking-advantage-of-observables-in-angular2.html

@Component({
  selector: 'app-rx-search',
  templateUrl: './rx-search.component.html',
  styleUrls: ['./rx-search.component.css']
})
export class RxSearchComponent implements OnInit {

  constructor(private _wiki: WikipediaService) { }

  async ngOnInit() {
    var res = await this._wiki.search('dog');
    console.log(res);
  }

}
