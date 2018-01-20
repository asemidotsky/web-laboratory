import { Calculator } from "../calculator";
import { db } from "../database";

describe("Calculator", () => {

  const calc = new Calculator();

  beforeAll(() => {
    db.addItem(25);
    console.log(`beforeAll Add and Sub test suite: ${db.itemsCount()} items in DB`);
  });

  afterEach(() => {
    db.addItem(45);
    console.log(`afterEach Add and Sub test suite: ${db.itemsCount()} items in DB`);
  });

  it("add 4 to 5 equals 9", () => {
    expect(calc.add(4,5)).toBe(9);
  });
  it("sub 7 and 3 equals 4", () => {
    expect(calc.sub(7,3)).toBe(4);
  });
});