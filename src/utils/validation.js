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
} from "./Error.js";
import { ERROR_MESSAGE, MESSAGE_FACTOR } from "../constant/message.js";
import { ALL_MENU, BEVERAGE, RESTAURANT } from "../constant/restaurant.js";

export const DATE_VALIDATOR = Object.freeze({
  noInput(date) {
    if (date === MESSAGE_FACTOR.noInput) throw new NoInputError(ERROR_MESSAGE.date);
  },

  notNumber(date) {
    if (isNaN(date)) throw new NotNumberError();
  },

  invalidNumber(date) {
    if (date < RESTAURANT.minDateValue || date > RESTAURANT.maxDateValue) throw new InvalidNumberError();
  },

  notInteger(date) {
    if (!Number.isInteger(Number(date))) throw new NotIntegerError();
  },
});

export const MENU_VALIDATOR = Object.freeze({
  noInput({ menuListObject }) {
    if (Object.keys(menuListObject).length === MESSAGE_FACTOR.noInputLength) throw new NoInputError(ERROR_MESSAGE.menu);
  },

  notMenu({ menuListObject }) {
    const isMenu = Object.keys(menuListObject).every((menu) =>
      Object.keys(ALL_MENU).includes(menu)
    );

    if (!isMenu) throw new NotMenuError();
  },

  InvalidFormatError({ menuListInput }) {
    const menuList = menuListInput.trim().split(MESSAGE_FACTOR.stringSeperator);
    const regex = /^\s*[가-힣]+\s*-\s*\d+\s*$/;
    const isInvalidFormat = menuList
      .filter((menu) => menu !== MESSAGE_FACTOR.noInput)
      .some((menu) => !regex.test(menu));

    if (isInvalidFormat) throw new InvalidFormatError();
  },

  invalidCountFormat({ menuListObject }) {
    Object.values(menuListObject).forEach((count) => {
      if (!Number.isInteger(count) || count < RESTAURANT.minCountValue) throw new InvalidCountFormatError();
    });
  },

  duplicated({ menuListObject, menuListInput }) {
    const menuNames = menuListInput
      .trim()
      .split(MESSAGE_FACTOR.stringSeperator)
      .filter((string) => string !== MESSAGE_FACTOR.noInput);

    if (Object.keys(menuListObject).length !== menuNames.length) throw new DuplicatedError();
  },

  onlyBeverage({ menuListObject }) {
    const allBeverage = Object.keys(menuListObject).every((menu) =>
      Object.keys(BEVERAGE).includes(menu)
    );

    if (allBeverage) throw new OnlyBeverageError();
  },

  invalidCountRangeError({ menuListObject }) {
    const totalCount = Object.values(menuListObject).reduce((sum, count) => sum + count, RESTAURANT.initialCount);

    if (totalCount > RESTAURANT.maxCountValue) throw new InvalidCountRangeError();
  },
});
