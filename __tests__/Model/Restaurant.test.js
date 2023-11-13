import Restaurant from "../../src/Model/Restaurant";
import Customer from "../../src/Model/Customer";
import XmasDdayDiscount from "../../src/Model/Event/XmasDdayDiscount";
import WeekdayDiscount from "../../src/Model/Event/WeekDayDiscount";
import WeekendDiscount from "../../src/Model/Event/WeekendDiscount";
import SpecialDiscount from "../../src/Model/Event/SpecialDiscount";
import Giveaway from "../../src/Model/Event/GiveAway";
import BadgeAward from "../../src/Model/Event/BadgeAward";

jest.mock("../../src/Model/Customer");

let restaurant;
describe("Restaurant 클래스 테스트", () => {
  beforeEach(() => {
    restaurant = new Restaurant({
      events: [new XmasDdayDiscount(), new WeekdayDiscount(), new WeekendDiscount(), new SpecialDiscount(), new Giveaway()],
      badgeAward: new BadgeAward(),
    });
  });

  describe("implementEvent 메서드 테스트", () => {
    test("implementEvent 메서드가 존재해야 한다.", () => {
      expect(typeof restaurant.implementEvent).toBe("function");
    });

    test("implementEvet 메서드를 호출하면 이벤트 적용 정보를 반환해야 한다.", () => {
      const orderInfo = {
        date: 3,
        menuList: { 티본스테이크: 1, 바비큐립: 1, 초코케이크: 2, 제로콜라: 1 },
      };
      const eventInfo = {
        totalAmount: 142000,
        giveaway: "샴페인",
        xmasDdayDiscount: 1200,
        weekdayDiscount: 4046,
        specialDiscount: 1000,
        eventImplementAmount: 31246,
        badgeAward: "산타",
      };
      const eventImplementInfo = restaurant.implementEvent(orderInfo);
      expect(eventImplementInfo).toEqual(eventInfo);
    });
  });
});
