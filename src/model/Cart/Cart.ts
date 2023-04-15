import { Item } from "../Item/Item";

export class Cart {
  private _items: Item[] = [];
  private _subtotal = 0;

  constructor() {}

  get items(): Item[] {
    return this._items;
  }

  get subtotal(): number {
    return this._items.reduce((total, item) => {
      return (total += item.product.price * item.quantity);
    }, 0);
  }

  add(newItem: Item): void {
    const productAlreadyAdded = this._items.find(
      (item) => item.product.name === newItem.product.name
    );

    // if (productAlreadyAdded) {
    //   productAlreadyAdded.add();
    // }

    this._items.push(newItem);
  }
}
