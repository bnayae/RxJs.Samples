import { Component, Injectable } from '@angular/core';
import { ClothingUnit, ClothingWorker } from '.';

 import * as rx from 'rxjs';

@Injectable()
export class ClothingManufacturerService {

    clothing: rx.Observable<ClothingUnit>;

    constructor() {
        let workerA = new ClothingWorker('Aric');
        let workerB = new ClothingWorker('Suzan');
        this.clothing = rx.Observable.merge<ClothingUnit>(
            workerA.clothing,
            workerB.clothing)
            .map(c => c.setPrice(
                Math.floor(Math.random() * 10 + 1) * 5))
            .do(m => console.log('Manufacturer: Kind = ' + m.kind + ' , Final Price = ' + m.getPriceAfterDiscount()));

    }
}
