import { Console } from "@woowacourse/mission-utils";
import InputView from "../../src/View/InputView.js";
import { INPUT_MESSAGE } from "../../src/constant/message.js";

Console.readLineAsync = jest.fn();

describe("InputView 객체 테스트", () => {
  describe("readDate 메서드 테스트", () => {
    test("readDate 메서드가 존재해야 한다.", () => {
      expect(typeof InputView.readDate).toBe("function");
    });

    test("readDate 메서드가 호출되면 Console.readLineAsync가 호출되야 한다.", () => {
      InputView.readDate();
      expect(Console.readLineAsync).toBeCalledWith(INPUT_MESSAGE.date);
    });

    test("readDate 메서드가 promise를 반환하고 그 resolve 값이 입력값이어야 한다.", async () => {
      const dateInput = "25";
      const numberedDate = 25;
      const resolvedPromise = Promise.resolve(dateInput);
      Console.readLineAsync.mockReturnValue(resolvedPromise);

      const date = await InputView.readDate();
      expect(date).toBe(numberedDate);
    });
  });

  describe("readMenuList 메서드 테스트", () => {
    test("readMenuList 메서드가 존재해야 한다.", () => {
      expect(typeof InputView.readMenuList).toBe("function");
    });

    test("readMenuList 메서드가 호출되면 Console.readLineAsync가 호출되야 한다.", () => {
      InputView.readMenuList();
      expect(Console.readLineAsync).toBeCalledWith(INPUT_MESSAGE.menuList);
    });

    test("readMenuList 메서드가 promise를 반환하고 그 resolve 값이 입력값이어야 한다.", async () => {
      const menuListInput = "티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1";
      const expectedMenuList = {
        티본스테이크: 1,
        바비큐립: 1,
        초코케이크: 2,
        제로콜라: 1,
      };
      const resolvedPromise = Promise.resolve(menuListInput);
      Console.readLineAsync.mockReturnValue(resolvedPromise);

      const menuList = await InputView.readMenuList();
      expect(menuList).toEqual(expectedMenuList);
    });
  });
});
