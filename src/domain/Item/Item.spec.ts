import { test, expect, it, describe } from "vitest";
import { Product } from "../Product/Product";

import { Item } from "./Item";

describe("Item", () => {
  it("should have product name and quantity", () => {
    const item = new Item(new Product("t-shirt", 50), 1);

    expect(item.product.name).toBe("t-shirt");
    expect(item.quantity).toBe(1);
  });

  test("product name is a string", () => {
    const item = new Item(new Product("t-shirt", 50), 1);

    expect(typeof item.product.name).toBe("string");
  });

  it("should increase quantity by one when add", () => {
    const item = new Item(new Product("t-shirt", 50), 1);

    expect(item.quantity).toBe(1);
    item.add();
    expect(item.quantity).toBe(2);
  });

  test("minimum quantity is 1", () => {
    const item = new Item(new Product("t-shirt", 50), 2);

    expect(item.quantity).toBe(2);
    item.remove();
    expect(item.quantity).toBe(1);
    item.remove();
    expect(item.quantity).toBe(1);
  });
});
