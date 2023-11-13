import { Console } from "@woowacourse/mission-utils";
import OutputView from "../../src/View/OutputView";

Console.print = jest.fn();

describe("OutputView 객체 테스트", () => {
  describe("printMessage 메서드 테스트", () => {
    test("printMessage 메서드가 존재해야 한다.", () => {
      expect(typeof OutputView.printMessage).toBe("function");
    });

    test("printMessage 메서드가 호출되면 Console.print 메서드가 호출되야 한다.", () => {
      const message = "message";
      OutputView.printMessage(message);

      expect(Console.print).toBeCalledWith(message);
    });
  });
});
