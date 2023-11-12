import RestaurantEvent from "../../../src/Model/Event/RestaurantEvent";
import SpecialDiscount from "../../../src/Model/Event/SpecialDiscount";

let specialDiscount;
describe("SpecialDiscount 클래스 테스트", () => {
  beforeEach(() => {
    specialDiscount = new SpecialDiscount();
  });

  test("SpecialDiscount는 RestaurantEvent를 상속받아야 한다.", () => {
    expect(specialDiscount instanceof RestaurantEvent).toBe(true);
  });

  describe("implement 메서드 테스트", () => {
    test("SpecialDiscount는 implement 메서드를 오버라이딩 해야 한다.", () => {
      const date = 25;
      expect(() => specialDiscount.implement({ date })).not.toThrow(Error);
    });

    test.each([
      [25, 1000],
      [3, 1000],
      [10, 1000],
      [24, 1000],
    ])("%s일을 인자로 받으면 %s을 반환해야 한다.", (date, discount) => {
      const discountAmount = specialDiscount.implement({ date });
      expect(discountAmount.specialDiscount).toBe(discount);
    });

    test.each([
      [4, undefined],
      [5, undefined],
      [19, undefined],
      [30, undefined],
    ])("달력에 별이 없는 날을 인자로 받으면 반환값이 없어야 한다.", (date, discount) => {
      const discountAmount = specialDiscount.implement({ date });
      expect(discountAmount.specialDiscount).toBe(discount);
    });
  });
});
