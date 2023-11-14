import { ERROR_MESSAGE } from "../constant/message";

export class CustomError extends Error {
  constructor(message) {
    super(`${ERROR_MESSAGE.common}${message}`);
    this.name = this.constructor.name;
  }
}

export class InvalidDateError extends CustomError {
  constructor(message) {
    message = message || ERROR_MESSAGE.date;
    super(message);
  }
}
export class InvalidMenuError extends CustomError {
  constructor(message) {
    message = message || ERROR_MESSAGE.menu;
    super(message);
  }
}
export class NoInputError extends CustomError {}

export class NotNumberError extends InvalidDateError {}
export class InvalidNumberError extends InvalidDateError {}
export class NotIntegerError extends InvalidDateError {}

export class NotMenuError extends InvalidMenuError {}
export class InvalidCountFormatError extends InvalidMenuError {}
export class InvalidFormatError extends InvalidMenuError {}
export class DuplicatedError extends InvalidMenuError {}
export class OnlyBeverageError extends InvalidMenuError {}
export class InvalidCountRangeError extends InvalidMenuError {}
