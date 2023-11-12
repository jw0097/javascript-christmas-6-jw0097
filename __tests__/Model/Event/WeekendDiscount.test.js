import RestaurantEvent from "../../../src/Model/Event/RestaurantEvent.js";
import WeekendDiscount from "../../../src/Model/Event/WeekendDiscount.js";

let weekendDiscount;
describe("WeekendDiscount 클래스 테스트", () => {
  beforeEach(() => {
    weekendDiscount = new WeekendDiscount();
  });

  test("WeekendDiscount는 RestaurantEvent를 상속받아야 한다.", () => {
    expect(weekendDiscount instanceof RestaurantEvent).toBe(true);
  });

  describe("implement 메서드 테스트", () => {
    test("WeekdayDiscount는 implement 메서드를 오버라이딩 해야 한다.", () => {
      const date = 25;
      const menuList = { 양송이수프: 1, 해산물파스타: 1, 초코케이크: 1, 제로콜라: 1 };
      expect(() => weekendDiscount.implement({ date, menuList })).not.toThrow(Error);
    });

    test.each([
      [15, { 양송이수프: 1, 해산물파스타: 1, 초코케이크: 1, 제로콜라: 1 }, 2023],
      [22, { 양송이수프: 1, 해산물파스타: 1, 초코케이크: 1, 제로콜라: 1 }, 2023],
      [15, { 양송이수프: 1, 해산물파스타: 2, 초코케이크: 1, 제로콜라: 1 }, 4046],
      [15, { 양송이수프: 1, 해산물파스타: 2, 크리스마스파스타: 1, 초코케이크: 1, 제로콜라: 1 }, 6069],
    ])("%s일과 %s 메뉴를 인자로 받으면 %s을 반환해야 한다.", (date, menuList, discount) => {
      const discountAmount = weekendDiscount.implement({ date, menuList });
      expect(discountAmount.weekendDiscount).toBe(discount);
    });

    test.each([
      [24, { 양송이수프: 1, 해산물파스타: 1, 초코케이크: 1, 제로콜라: 1 }, undefined],
      [25, { 양송이수프: 1, 해산물파스타: 1, 초코케이크: 1, 제로콜라: 1 }, undefined],
      [28, { 양송이수프: 1, 해산물파스타: 2, 초코케이크: 1, 제로콜라: 1 }, undefined],
    ])("주말이 아닌 날을 인자로 받으면 반환값이 없어야 한다.", (date, menuList, discount) => {
      const discountAmount = weekendDiscount.implement({ date, menuList });
      expect(discountAmount).toBe(discount);
    });

    test.each([
      [15, { 양송이수프: 1, 초코케이크: 1, 제로콜라: 1 }, undefined],
      [15, { 타파스: 1, 초코케이크: 1, 아이스크림: 1 }, undefined],
    ])("메인메뉴가 포함되지 않은 메뉴를 인자로 받으면 반환값이 없어야 한다.", (date, menuList, discount) => {
      const discountAmount = weekendDiscount.implement({ date, menuList });
      expect(discountAmount).toBe(discount);
    });
  });
});
