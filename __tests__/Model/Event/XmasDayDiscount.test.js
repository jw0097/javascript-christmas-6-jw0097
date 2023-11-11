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

  describe("implement 메서드 테스트", () => {
    test("XmasDdayDiscount는 implement 메서드를 오버라이딩 해야 한다.", () => {
      const date = 25;
      expect(() => xmasDdayDiscount.implement({ date })).not.toThrow(Error);
    });

    test.each([
      [1, 1000],
      [2, 1100],
      [24, 3300],
      [25, 3400],
    ])("%s가 인자로 들어오면 %s를 반환해야 한다.", (date, discount) => {
      const discountAmount = xmasDdayDiscount.implement({ date });
      expect(discountAmount.xmasDdayDiscount).toBe(discount);
    });

    test.each([
      [26, undefined],
      [30, undefined],
    ])("%s가 인자로 들어오면 %s를 반환해야 한다.", (date, discount) => {
      const discountAmount = xmasDdayDiscount.implement({ date });
      expect(discountAmount).toBe(discount);
    });
  });
});
