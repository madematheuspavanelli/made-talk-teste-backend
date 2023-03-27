import { Product } from "../Product/Product";

export class Item {
  private readonly _product: Product;
  private _quantity: number;

  constructor(product: Product, quantity: number) {
    this._product = product;
    this._quantity = quantity;
  }

  get product(): Product {
    return this._product;
  }

  add(amount = 1) {
    this._quantity = this._quantity + amount;
  }

  remove() {
    if (this._quantity <= 1) return;

    this._quantity = this._quantity - 1;
  }

  get quantity(): number {
    return this._quantity;
  }
}
