import { ERROR_MESSAGE } from "../constant/message";
import { InvalidNumberError, NoInputError, NotIntegerError, NotNumberError } from "./Error";

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
