/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { ClothingAggregationComponent } from './clothing-aggregation.component';
import { ClothingUnit, ClothingStoreService, ClothingKind, ClothingQuality } from '../.';

describe('Component: Clothing', () => {
  it('should create an instance', () => {

    let store = new ClothingStoreService();
    let component = new ClothingAggregationComponent(store);
    expect(component).toBeTruthy();
  });
});
