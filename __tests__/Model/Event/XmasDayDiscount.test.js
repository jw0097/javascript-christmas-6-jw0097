import RestaurantEvent from "../../../src/Model/Event/RestaurantEvent";
import XmasDdayDiscount from "../../../src/Model/Event/XmasDdayDiscount";
let xmasDdayDiscount;
describe("XmasDdayDiscount 클래스 테스트", () => {
  beforeEach(() => {
    xmasDdayDiscount = new XmasDdayDiscount();
  });
  test("XmasDdayDiscount는 RestaurantEvent를 상속받아야 한다.", () => {
    expect(xmasDdayDiscount instanceof RestaurantEvent).toBe(true);
  });

  test("XmasDdayDiscount는 implement 메서드를 오버라이딩 해야 한다.", () => {
    const date = 25;
    expect(() => xmasDdayDiscount.implement({ date })).not.toThrow(Error);
  });
});
