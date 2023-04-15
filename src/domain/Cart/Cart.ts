type Product = {
  name: string;
  price: number;
};

export class Cart {
  private products: Product[] = [];

  addProduct(product: Product) {
    this.products.push(product);
  }

  removeProduct(name: string) {
    this.products = this.products.filter((product) => product.name !== name);
  }

  getTotalPrice() {
    return this.products.reduce((total, product) => total + product.price, 0);
  }
}
