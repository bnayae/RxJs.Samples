import { Component, Pipe, OnInit } from '@angular/core';
import { ClothingUnit, ClothingStoreService, ClothingKind, ClothingQuality } from '../.';

import * as rx from 'rxjs';

@Component({
  selector: 'app-clothing-aggregation',
  templateUrl: './clothing-aggregation.component.html',
  styleUrls: ['./clothing-aggregation.component.css'],
  providers: [ClothingStoreService]
})
export class ClothingAggregationComponent implements OnInit {

  ofers:rx.Observable<ClothingUnit>; // volotile ofering
  purchases:rx.Observable<ClothingUnit[]>;

  constructor(private store:ClothingStoreService) {     
  }

  ngOnInit() {

    this.ofers = this.store.clothing; // make sure that the store.clothing is hot observable !!!

    let basicFilters:rx.Observable<ClothingUnit> = 
            this.store.clothing
                        .filter(c => c.kind == ClothingKind.Dress)
                        .filter(c => c.quality == ClothingQuality.A)
                        .filter(c => c.getPriceAfterDiscount() < 130)
                        .filter(c => c.discount > 20);

    this.purchases = basicFilters.bufferTime(3000)
                                 .map(a => a.sort((a, b) => a.price - b.price));
  }

}
