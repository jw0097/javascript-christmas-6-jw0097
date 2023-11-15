import { Console } from "@woowacourse/mission-utils";
import OutputView from "../../src/View/OutputView.js";
import { EOL as LINE_SEPARATOR } from "os";

Console.print = jest.fn();

describe("OutputView 객체 테스트", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("printMessage 메서드 테스트", () => {
    test("printMessage 메서드가 존재해야 한다.", () => {
      // then
      expect(typeof OutputView.printMessage).toBe("function");
    });

    test("printMessage 메서드가 호출되면 Console.print 메서드가 호출되야 한다.", () => {
      // given
      const message = "message";

      // when
      OutputView.printMessage(message);

      // then
      expect(Console.print).toBeCalledWith(message);
    });
  });

  describe("printEventImplementInfo 메서드 테스트", () => {
    test("printEventImplementInfo 메서드가 존재해야 한다.", () => {
      // then
      expect(typeof OutputView.printEventImplementInfo).toBe("function");
    });

    test("printEventImplementInfo 메서드가 호출되면 Console.print 메서드가 이벤트 결과와 호출되야 한다.", () => {
      // given
      const menuList = { 티본스테이크: 1, 바비큐립: 1, 초코케이크: 2, 제로콜라: 1 };
      const eventImplementInfo = {
        totalAmount: 142000,
        xmasDdayDiscount: 1200,
        weekdayDiscount: 4046,
        specialDiscount: 1000,
        giveaway: "샴페인",
        eventImplementAmount: 31246,
        badgeAward: "산타",
      };
      const eventImplementInfoMessage = [
        "",
        "<주문 메뉴>",
        "티본스테이크 1개",
        "바비큐립 1개",
        "초코케이크 2개",
        "제로콜라 1개",
        "",
        "<할인 전 총주문 금액>",
        "142,000원",
        "",
        "<증정 메뉴>",
        "샴페인 1개",
        "",
        "<혜택 내역>",
        "크리스마스 디데이 할인: -1,200원",
        "평일 할인: -4,046원",
        "특별 할인: -1,000원",
        "증정 이벤트: -25,000원",
        "",
        "<총혜택 금액>",
        "-31,246원",
        "",
        "<할인 후 예상 결제 금액>",
        "135,754원",
        "",
        "<12월 이벤트 배지>",
        "산타",
      ].join(LINE_SEPARATOR);

      // when
      OutputView.printEventImplementInfo({ menuList, eventImplementInfo });

      // then
      expect(Console.print).toBeCalledWith(eventImplementInfoMessage);
    });
  });
});
