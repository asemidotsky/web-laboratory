import { Calculator } from "../calculator";
import { db } from "../database";

describe("Calculator", () => {

  const calc = new Calculator();

  beforeAll(() => {
    db.addItem(35);
    console.log(`beforeAll Mul test suite: ${db.itemsCount()} items in DB`);
  });

  it("mul 4 and 5 equals 20", () => {
    expect(calc.mul(4,5)).toBe(20);
  });
});