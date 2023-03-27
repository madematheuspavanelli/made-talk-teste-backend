import { it, describe, test, expect } from "vitest";
import { Product } from "./Product";

describe("Product", () => {
  it("should create a product with name and price", () => {
    const product = new Product("t-shirt", 50);

    expect(product.name).toBe("t-shirt");
    expect(product.price).toBe(50);
  });

  test("Product name cannot be empty", () => {
    expect(() => {
      const item = new Product("", 1);
    }).toThrowError("Product name cannot be null");
  });
});
