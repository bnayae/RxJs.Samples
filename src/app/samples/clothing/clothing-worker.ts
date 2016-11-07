import { Component, Injectable } from '@angular/core';
import { ClothingUnit, ClothingKind, ClothingQuality } from '.';

import * as Rx from 'rxjs';

export class ClothingWorker {

    clothing:Rx.Observable<ClothingUnit>;

    constructor(name:string) {
        this.clothing = Rx.Observable.interval(500)
            .map(i => 
            {
                let item:ClothingUnit = new ClothingUnit(
                       <ClothingKind>(i % 4),
                       <ClothingQuality>(i % 2));
                return item;
            })
            .do(m => console.log('Worker [' + name + ']: Kind = ' + m.kind));
    }
}
