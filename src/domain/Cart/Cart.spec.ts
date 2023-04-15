import { beforeEach, describe, expect, it } from "vitest";
import { Cart } from "./Cart";

describe.only("Cart", () => {
  let cart: Cart;

  beforeEach(() => {
    cart = new Cart();
  });

  it("should add a product to the cart", () => {
    cart.addProduct({
      name: "Produtc 1",
      price: 10,
    });
    expect(cart.getTotalPrice()).toBe(10);
  });

  it("should remove a product from the cart", () => {
    cart.addProduct({
      name: "Produto 1",
      price: 10,
    });
    cart.removeProduct("Produto 1");
    expect(cart.getTotalPrice()).toBe(0);
  });

  it("should calculate the total price of all products in the cart", () => {
    cart.addProduct({
      name: "Produtc 1",
      price: 10,
    });
    cart.addProduct({
      name: "Produtc 2",
      price: 20,
    });
    expect(cart.getTotalPrice()).toBe(30);
  });
});
