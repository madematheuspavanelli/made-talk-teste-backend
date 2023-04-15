import { test, expect, it, describe } from "vitest";
import { Item } from "../Item/Item";
import { Product } from "../Product/Product";

import { Cart } from "./Cart";

describe("Cart", () => {
  const productShirt = new Product("t-shirt", 50);

  it("should create a new cart with no itens and zero as subtotal", () => {
    const cart = new Cart();

    expect(cart.items.length).toBe(0);
    expect(cart.subtotal).toBe(0);
  });

  it.only("should add an item and update items and subtotal", () => {
    const cart = new Cart();

    cart.add(new Item(productShirt, 2));
    expect(cart.items.length).toBe(1);
    expect(cart.subtotal).toBe(100);
  });

  it("should not contain duplicated items", () => {
    const cart = new Cart();

    cart.add(new Item(productShirt, 1));
    expect(cart.items.length).toBe(1);

    cart.add(new Item(productShirt, 1));
    expect(cart.items.length).toBe(2);

    console.log(cart.items);
  });

  it.skip("discount", () => {});
});
