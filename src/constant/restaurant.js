export const WEEKDAY = Object.freeze([0, 1, 2, 3, 4]);

export const WEEKEND = Object.freeze([5, 6]);

export const STAR_DAY = Object.freeze([3, 10, 17, 24, 25, 31]);

export const APPETIZER = Object.freeze({
  양송이수프: 6000,
  타파스: 5500,
  시저샐러드: 8000,
});

export const MAIN_DISH = Object.freeze({
  티본스테이크: 55000,
  바비큐립: 54000,
  해산물파스타: 35000,
  크리스마스파스타: 25000,
});

export const DESSERT = Object.freeze({
  초코케이크: 15000,
  아이스크림: 5000,
});

export const BEVERAGE = Object.freeze({
  제로콜라: 3000,
  레드와인: 60000,
  샴페인: 25000,
});

export const ALL_MENU = Object.freeze({
  ...APPETIZER,
  ...MAIN_DISH,
  ...DESSERT,
  ...BEVERAGE,
});

export const RESTAURANT = Object.freeze({
  giveaway: "샴페인",
});

export const BADGE_AWARD_CONDITION = Object.freeze({
  산타: [20000, Infinity],
  트리: [10000, 20000],
  별: [5000, 10000],
});
