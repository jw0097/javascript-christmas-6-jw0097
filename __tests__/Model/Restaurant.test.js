import Restaurant from "../../src/Model/Restaurant";
import Customer from "../../src/Model/Customer";

jest.mock("../../src/Model/Customer");

let restaurant;
describe("Restaurant 클래스 테스트", () => {
  beforeEach(() => {
    restaurant = new Restaurant({
      events: [],
      badgeAward: {},
    });
  });

  describe("makeOrder 메서드 테스트", () => {
    test("makeOrder 메서드가 존재해야 한다.", () => {
      expect(typeof restaurant.makeOrder).toBe("function");
    });

    test("makeOrder 메서드를 호출하면 Customer 인스턴스를 생성해야 한다.", () => {
      const date = 25;
      const menuList = {
        양송이수프: 1,
        해산물파스타: 1,
        초코케이크: 1,
        제로콜라: 1,
      };
      restaurant.makeOrder({ date, menuList });

      expect(Customer).toBeCalledWith({ date, menuList });
    });
  });
});
