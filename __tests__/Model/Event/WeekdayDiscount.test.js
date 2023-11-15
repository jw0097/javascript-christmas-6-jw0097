import WeekdayDiscount from "../../../src/Model/Event/WeekdayDiscount.js";
import RestaurantEvent from "../../../src/Model/Event/RestaurantEvent.js";

let weekdayDiscount;

describe("WeekdayDiscount 클래스 테스트", () => {
  beforeEach(() => {
    weekdayDiscount = new WeekdayDiscount();
  });

  test("WeekdayDiscount는 RestaurantEvent를 상속받아야 한다.", () => {
    // then
    expect(weekdayDiscount instanceof RestaurantEvent).toBe(true);
  });

  describe("implement 메서드 테스트", () => {
    test("WeekdayDiscount는 implement 메서드를 오버라이딩 해야 한다.", () => {
      // given
      const date = 25;
      const menuList = { 양송이수프: 1, 해산물파스타: 1, 초코케이크: 1, 제로콜라: 1 };

      // when - then
      expect(() => weekdayDiscount.implement({ date, menuList })).not.toThrow(Error);
    });

    test.each([
      [25, { 양송이수프: 1, 해산물파스타: 1, 초코케이크: 1, 제로콜라: 1 }, 2023],
      [26, { 양송이수프: 1, 해산물파스타: 1, 초코케이크: 1, 제로콜라: 1 }, 2023],
      [25, { 양송이수프: 1, 해산물파스타: 1, 초코케이크: 2, 제로콜라: 1 }, 4046],
      [25, { 양송이수프: 1, 해산물파스타: 1, 초코케이크: 2, 아이스크림: 1, 제로콜라: 1 }, 6069],
    ])("%s일과 %s 메뉴를 인자로 받으면 %s을 반환해야 한다.", (date, menuList, discount) => {
      // when
      const discountAmount = weekdayDiscount.implement({ date, menuList });

      // then
      expect(discountAmount.weekdayDiscount).toBe(discount);
    });

    test.each([
      [15, { 양송이수프: 1, 해산물파스타: 1, 초코케이크: 1, 제로콜라: 1 }, undefined],
      [22, { 양송이수프: 1, 해산물파스타: 1, 초코케이크: 1, 제로콜라: 1 }, undefined],
      [30, { 양송이수프: 1, 해산물파스타: 1, 초코케이크: 1, 제로콜라: 1 }, undefined],
    ])("평일이 아닌 날을 인자로 받으면 반환값이 없어야 한다.", (date, menuList, discount) => {
      // when
      const discountAmount = weekdayDiscount.implement({ date, menuList });

      // then
      expect(discountAmount).toBe(discount);
    });

    test.each([
      [25, { 양송이수프: 1, 해산물파스타: 1, 제로콜라: 1 }, undefined],
      [25, { 타파스: 1, 샴페인: 1 }, undefined],
    ])("디저트가 포함되지 않은 메뉴를 인자로 받으면 반환값이 없어야 한다.", (date, menuList, discount) => {
      // when
      const discountAmount = weekdayDiscount.implement({ date, menuList });

      // then
      expect(discountAmount).toBe(discount);
    });
  });
});
