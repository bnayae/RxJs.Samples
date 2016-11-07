import { Component, Pipe, OnInit } from '@angular/core';
import { ClothingUnit, ClothingStoreService, ClothingKind, ClothingQuality } from '../.';

import * as rx from 'rxjs';

@Component({
  selector: 'app-clothing-into-array',
  templateUrl: './clothing-into-array.component.html',
  styleUrls: ['./clothing-into-array.component.css'],
  providers: [ClothingStoreService]
})
export class ClothingIntoArrayComponent implements OnInit {

  ofers:rx.Observable<ClothingUnit>; // volotile ofering
  purchases:ClothingUnit[] = [];

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

    let periods:rx.Observable<ClothingUnit> =
          basicFilters.windowTime(7000)
              .flatMap(w => w.take(2));

    periods.subscribe(c => this.purchases.splice(0, 0, c),
                      ex => console.log(ex),
                      () => console.log('store closed'));
  }

}
