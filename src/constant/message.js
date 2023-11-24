import { EOL as LINE_SEPARATOR } from "os";

export const INPUT_MESSAGE = Object.freeze({
  date: "12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)" + LINE_SEPARATOR,
  menuList: "주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)" + LINE_SEPARATOR,
});

export const OUTPUT_MESSAGE = Object.freeze({
  welcome: "안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.",
  beforeEventInfo: "12월 26일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!",
  menuList: LINE_SEPARATOR + "<주문 메뉴>" + LINE_SEPARATOR,
  totalAmount: LINE_SEPARATOR + "<할인 전 총주문 금액>" + LINE_SEPARATOR,
  giveaway: LINE_SEPARATOR + "<증정 메뉴>" + LINE_SEPARATOR,
  detailImplement: LINE_SEPARATOR + "<혜택 내역>" + LINE_SEPARATOR,
  eventImplementAmount: LINE_SEPARATOR + "<총혜택 금액>" + LINE_SEPARATOR,
  totalAmountAfterDiscount: LINE_SEPARATOR + "<할인 후 예상 결제 금액>" + LINE_SEPARATOR,
  badgeAward: LINE_SEPARATOR + "<12월 이벤트 배지>" + LINE_SEPARATOR,
});

export const ERROR_MESSAGE = Object.freeze({
  common: "[ERROR] ",
  date: "유효하지 않은 날짜입니다. 다시 입력해 주세요." + LINE_SEPARATOR,
  menu: "유효하지 않은 주문입니다. 다시 입력해 주세요." + LINE_SEPARATOR,
});

export const MESSAGE_FACTOR = Object.freeze({
  eventSeperator: ":",
  stringSeperator: ",",
  menuCountSeperator: "-",
  noInput: "",
  noInputLength: 0,
  
})