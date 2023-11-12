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
      events: [
        new XmasDdayDiscount(),
        new WeekdayDiscount(),
        new WeekendDiscount(),
        new SpecialDiscount(),
        new Giveaway(),
      ],
      badgeAward: new BadgeAward(),
    });
  });

  describe("saveCustomerInfo 메서드 테스트", () => {
    test("saveCustomerInfo 메서드가 존재해야 한다.", () => {
      expect(typeof restaurant.saveCustomerInfo).toBe("function");
    });

    test("saveCustomerInfo 메서드를 호출하면 Customer 인스턴스를 생성해야 한다.", () => {
      const date = 25;
      const menuList = {
        양송이수프: 1,
        해산물파스타: 1,
        초코케이크: 1,
        제로콜라: 1,
      };
      restaurant.saveCustomerInfo({ date, menuList });

      expect(Customer).toBeCalledWith({ date, menuList });
    });
  });
});
