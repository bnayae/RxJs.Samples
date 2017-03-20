import { ClothingKind, ClothingQuality } from '.';

export class ClothingUnit {

    constructor(
        kind: ClothingKind,
        quality: ClothingQuality,
        price: number = 0,
        discount: number = 0) {
        this.kind = kind;
        this.quality = quality;
        this.price = price;
        this.discount = discount;
    }

    readonly kind: ClothingKind;
    readonly price: number;
    readonly quality: ClothingQuality;
    readonly discount: number = 0;

    getPriceAfterDiscount(): number {
        if (this.discount == 0)
            return this.price;
        let discount = this.discount / 100;
        return this.price * discount;
    }

    flatten(priceFactor: number = 1, discount: number = 0): ClothingUnit {

        let price: number = this.getPriceAfterDiscount() * priceFactor;
        let clone = new ClothingUnit(
            this.kind,
            this.quality,
            price,
            discount);
        return clone;
    }

    setPrice(price: number, ): ClothingUnit {
        let clone = new ClothingUnit(
            this.kind,
            this.quality,
            price,
            0);
        return clone;
    }
}
