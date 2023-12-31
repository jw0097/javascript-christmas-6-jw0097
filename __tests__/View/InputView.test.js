import { Console } from "@woowacourse/mission-utils";
import InputView from "../../src/View/InputView.js";
import {
  DuplicatedError,
  InvalidCountFormatError,
  InvalidCountRangeError,
  InvalidFormatError,
  InvalidNumberError,
  NoInputError,
  NotIntegerError,
  NotMenuError,
  NotNumberError,
  OnlyBeverageError,
} from "../../src/utils/Error.js";
import { INPUT_MESSAGE } from "../../src/constant/message.js";

Console.readLineAsync = jest.fn();

describe("InputView 객체 테스트", () => {
  describe("readDate 메서드 테스트", () => {
    test("readDate 메서드가 존재해야 한다.", () => {
      // then
      expect(typeof InputView.readDate).toBe("function");
    });

    test("readDate 메서드가 호출되면 Console.readLineAsync가 호출되야 한다.", () => {
      // given
      Console.readLineAsync.mockReturnValue("25");

      // when
      InputView.readDate();

      // then
      expect(Console.readLineAsync).toBeCalledWith(INPUT_MESSAGE.date);
    });

    test("readDate 메서드가 promise를 반환하고 그 resolve 값이 입력값이어야 한다.", async () => {
      // given
      const dateInput = "25";
      const numberedDate = 25;
      const resolvedPromise = Promise.resolve(dateInput);
      Console.readLineAsync.mockReturnValue(resolvedPromise);

      // when
      const date = await InputView.readDate();
      // then
      expect(date).toBe(numberedDate);
    });

    test.each([
      [
        "아무 입력이 없다면 NoInputError", 
        "", 
        NoInputError],
      [
        "입력된 값이 숫자가 아니라면 NotNumberError", 
        "a", 
        NotNumberError],
      [
        "입력된 값이 1부터 31까지의 숫자가 아니라면 InvalidNumberError",
        "45",
        InvalidNumberError,
      ],
      [
        "입력된 값이 1부터 31까지의 숫자가 아니라면 InvalidNumberError",
        "0",
        InvalidNumberError,
      ],
      [
        "입력된 값이 1부터 31까지의 숫자가 아니라면 InvalidNumberError",
        "-15",
        InvalidNumberError,
      ],
      [
        "입력된 값이 정수가 아니라면 NotIntegerError", 
        "10.5", 
        NotIntegerError
      ],
    ])("%s를 throw 해야 한다.", async (description, date, error) => {
      // given
      Console.readLineAsync.mockReturnValue(date);

      // when - then
      await expect(InputView.readDate()).rejects.toThrow(error);
    });
  });

  describe("readMenuList 메서드 테스트", () => {
    test("readMenuList 메서드가 존재해야 한다.", () => {
      // then
      expect(typeof InputView.readMenuList).toBe("function");
    });

    test("readMenuList 메서드가 호출되면 Console.readLineAsync가 호출되야 한다.", () => {
      // given
      Console.readLineAsync.mockReturnValue("티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1");

      // when
      InputView.readMenuList();

      // then
      expect(Console.readLineAsync).toBeCalledWith(INPUT_MESSAGE.menuList);
    });

    test("readMenuList 메서드가 promise를 반환하고 그 resolve 값이 입력값이어야 한다.", async () => {
      // given
      const menuListInput = "티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1";
      const expectedMenuList = {
        티본스테이크: 1,
        바비큐립: 1,
        초코케이크: 2,
        제로콜라: 1,
      };
      const resolvedPromise = Promise.resolve(menuListInput);
      Console.readLineAsync.mockReturnValue(resolvedPromise);

      // when
      const menuList = await InputView.readMenuList();

      // then
      expect(menuList).toEqual(expectedMenuList);
    });

    test.each([
      [
        "아무 입력이 없다면 NoInputError", 
        "", 
        NoInputError],
      [
        "메뉴에 없는 음식을 입력하면 NotMenuError",
        " 타파스-1,제로콜라-1, 라면-1 ",
        NotMenuError,
      ],
      [
        "입력 형식이 정확하지 않으면 InvalidFormatError",
        " 타파스-:1,제로콜라-1 ",
        InvalidFormatError,
      ],
      [
        "입력 형식이 정확하지 않으면 InvalidFormatError",
        "   타파스-1,제로콜라-1, 초코케이크3 ",
        InvalidFormatError,
      ],
      [
        "입력 형식이 정확하지 않으면 InvalidFormatError",
        "   타파스-1,제로콜라-0 1, 초코케이크-3 ",
        InvalidFormatError,
      ],
      [
        "메뉴의 개수가 1 이상의 숫자로 입력되지 않으면 InvalidCountFormatError",
        " 타파스 -  1,제로콜라 - 0,   ",
        InvalidCountFormatError,
      ],
      [
        "중복된 메뉴가 입력되면 DuplicatedError",
        " 타파스-1,제로콜라-1, 타파스-1,",
        DuplicatedError,
      ],
      [
        "음료만 주문하면 OnlyBeverageError",
        "  레드와인-1,제로콜라-1,  ",
        OnlyBeverageError,
      ],
      [
        "20개 이상의 메뉴가 주문되면 InvalidCountRangeError",
        "티본스테이크-5,바비큐립-7,초코케이크-5,제로콜라-10",
        InvalidCountRangeError,
      ],
    ])("%s를 throw 해야 한다.", async (description, menu, error) => {
      // given
      Console.readLineAsync.mockReturnValue(menu);

      // when - then
      await expect(InputView.readMenuList()).rejects.toThrow(error);
    });
  });
});
