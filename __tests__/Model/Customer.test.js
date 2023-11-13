import Customer from "../../src/Model/Customer";

let customer;
describe("Customer 클래스 테스트", () => {
  beforeEach(() => {
    const orderInfo = {
      date: 3,
      menuList: { 티본스테이크: 1, 바비큐립: 1, 초코케이크: 2, 제로콜라: 1 },
    };
    customer = new Customer(orderInfo);
  });
  describe("setBadge 메서드 테스트", () => {
    test("Customer 클래스에 setBadge 메서드가 존재해야 한다.", () => {
      expect(typeof customer.setBadge).toBe("function");
    });
  });
});
