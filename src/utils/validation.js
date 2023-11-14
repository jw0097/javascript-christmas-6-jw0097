import { ERROR_MESSAGE } from "../constant/message";
import { BEVERAGE } from "../constant/restaurant";
import {
  DuplicatedError,
  InvalidCountFormatError,
  InvalidCountRangeError,
  InvalidFormatError,
  InvalidNumberError,
  NoInputError,
  NotIntegerError,
  NotNumberError,
  OnlyBeverageError,
} from "./Error";

export const DATE_VALIDATOR = Object.freeze({
  noInput(date) {
    if (date === "") throw new NoInputError(ERROR_MESSAGE.date);
  },

  notNumber(date) {
    if (isNaN(date)) throw new NotNumberError();
  },

  invalidNumber(date) {
    if (date < 1 || date > 31) throw new InvalidNumberError();
  },

  notInteger(date) {
    if (!Number.isInteger(Number(date))) throw new NotIntegerError();
  },
});
// const expectedMenuList = {
//     티본스테이크: 1,
//     바비큐립: 1,
//     초코케이크: 2,
//     제로콜라: 1,
//   };
export const MENU_VALIDATOR = Object.freeze({
  noInput({ menuListObject }) {
    if (Object.keys(menuListObject).length === 0) throw new NoInputError(ERROR_MESSAGE.menu);
  },

  InvalidFormatError({ menuListInput }) {
    const menuList = menuListInput.trim().split(",");
    const regex = /^\s*[가-힣]+\s*-\s*\d+\s*$/;
    const isInvalidFormat = menuList.filter((menu) => menu !== "").some((menu) => !regex.test(menu));

    if (isInvalidFormat) throw new InvalidFormatError();
  },

  invalidCountFormat({ menuListObject }) {
    Object.values(menuListObject).forEach((count) => {
      if (!Number.isInteger(count) || count < 1) throw new InvalidCountFormatError();
    });
  },

  duplicated({ menuListObject, menuListInput }) {
    const menuNames = menuListInput
      .trim()
      .split(",")
      .filter((string) => string !== "");
    if (Object.keys(menuListObject).length !== menuNames.length) throw new DuplicatedError();
  },

  onlyBeverage({ menuListObject }) {
    const allBeverage = Object.keys(menuListObject).every((menu) => Object.keys(BEVERAGE).includes(menu));
    if (allBeverage) throw new OnlyBeverageError();
  },

  invalidCountRangeError({ menuListObject }) {
    const totalCount = Object.values(menuListObject).reduce((sum, count) => sum + count, 0);
    if (totalCount > 20) throw new InvalidCountRangeError();
  },
});
