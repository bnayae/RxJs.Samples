/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { ClothingIntoArrayComponent } from './clothing-into-array.component';
import { ClothingUnit, ClothingStoreService, ClothingKind, ClothingQuality } from '../.';

describe('Component: Clothing', () => {
  it('should create an instance', () => {
    let store = new ClothingStoreService();
    let component = new ClothingIntoArrayComponent(store);
    expect(component).toBeTruthy();
  });
});
