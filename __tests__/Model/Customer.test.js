import Customer from "../../src/Model/Customer";

let customer;
describe("Customer 클래스 테스트", () => {
  beforeEach(() => {
    const date = 25;
    const menuList = {
      양송이수프: 1,
      해산물파스타: 1,
      초코케이크: 1,
      제로콜라: 1,
    };
    customer = new Customer({ date, menuList });
  });

  describe("getOrderInfo 메서드 테스트", () => {
    test("getOrderInfo 메서드가 존재해야 한다.", () => {
      expect(typeof customer.getOrderInfo).toBe("function");
    });

    test("getOrderInfo 메서드를 호출하면 주문 정보를 반환해야 한다.", () => {
      const expectedOrderInfo = {
        date: 25,
        menuList: {
          양송이수프: 1,
          해산물파스타: 1,
          초코케이크: 1,
          제로콜라: 1,
        },
      };
      const orderInfo = customer.getOrderInfo();

      expect(orderInfo).toEqual(expectedOrderInfo);
    });
  });
});
