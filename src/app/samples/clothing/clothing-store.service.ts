import { Component, Injectable } from '@angular/core';
import { ClothingUnit, ClothingWorker, ClothingManufacturerService } from '.';

import * as rx from 'rxjs';

@Injectable()
export class ClothingStoreService {

    clothing:rx.Observable<ClothingUnit>;

    constructor() {
        let manufacturerA = new ClothingManufacturerService();        
        let manufacturerB = new ClothingManufacturerService();
        this.clothing = rx.Observable.merge<ClothingUnit>(
                            manufacturerA.clothing,
                            manufacturerA.clothing)
                            .map(c => c.flatten(
                                        3, // factor
                                        Math.floor(Math.random() * 5) * 10)) // discount
                            .publish().refCount();  // make it hot observable    
                                                    // don't produce different item to each customer
    }
}
