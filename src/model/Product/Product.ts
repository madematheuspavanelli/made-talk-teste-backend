export class Product {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    const nameIsEmpty = !name;

    if (nameIsEmpty) {
      throw Error("Product name cannot be null");
    }

    this._name = name;
    this._price = price;
  }

  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price;
  }
}
