import { Console } from "@woowacourse/mission-utils";
import { MESSAGE_FACTOR, OUTPUT_MESSAGE } from "../constant/message.js";
import { ALL_MENU, DISCOUNT_EVENT_LIST, EVENT_LIST, RESTAURANT } from "../constant/restaurant.js";
import { EOL as LINE_SEPARATOR } from "os";

const OutputView = {
  printMessage(message) {
    Console.print(message);
  },

  printEventImplementInfo({ menuList, eventImplementInfo }) {
    const eventImplementInfoMessage = Object.values(messageGenerator)
      .map((generator) => {
        return generator({ menuList, eventImplementInfo });
      })
      .join(LINE_SEPARATOR);

    Console.print(eventImplementInfoMessage);
  },
};

const messageGenerator = {
  menuList({ menuList }) {
    const menuListMessage = Object.entries(menuList)
      .map(([menu, count]) => `${menu} ${count}${RESTAURANT.countUnit}`)
      .join(LINE_SEPARATOR);

    return `${OUTPUT_MESSAGE.menuList}${menuListMessage}`;
  },

  totalAmount({ eventImplementInfo }) {
    const totalAmountMessage = `${eventImplementInfo.totalAmount.toLocaleString()}${RESTAURANT.amountUnit}`;

    return `${OUTPUT_MESSAGE.totalAmount}${totalAmountMessage}`;
  },

  giveaway({ eventImplementInfo }) {
    const giveawayMessage = eventImplementInfo.giveaway ? `${eventImplementInfo.giveaway} ${RESTAURANT.giveawayUnit}` : RESTAURANT.nothing;

    return `${OUTPUT_MESSAGE.giveaway}${giveawayMessage}`;
  },

  detailImplement({ eventImplementInfo }) {
    const detailImplementMessage = Object.entries(eventImplementInfo).reduce((acc, [eventName, amount]) => {
      if (EVENT_LIST.hasOwnProperty(eventName)) {
        const amountString = eventName === RESTAURANT.giveawayString ? ALL_MENU[amount] : amount;
        acc.push(`${EVENT_LIST[eventName]}${MESSAGE_FACTOR.eventSeperator} ${RESTAURANT.discountPrefix}${amountString.toLocaleString()}${RESTAURANT.amountUnit}`);
      }
        return acc;
      }, [])
      .join(LINE_SEPARATOR) || RESTAURANT.nothing;

    return `${OUTPUT_MESSAGE.detailImplement}${detailImplementMessage}`;
  },

  eventImplementAmount({ eventImplementInfo }) {
    const eventImplementAmountMessage = eventImplementInfo.eventImplementAmount
      ? `${RESTAURANT.discountPrefix}${eventImplementInfo.eventImplementAmount.toLocaleString()}${RESTAURANT.amountUnit}`
      : `${RESTAURANT.noAmount}${RESTAURANT.amountUnit}`;

    return `${OUTPUT_MESSAGE.eventImplementAmount}${eventImplementAmountMessage}`;
  },

  totalAmountAfterDiscount({ eventImplementInfo }) {
    const totalDiscountAmount = Object.entries(eventImplementInfo).reduce((acc, [eventName, amount]) => {
      if (DISCOUNT_EVENT_LIST.includes(eventName)) acc += amount;
      return acc;
    }, RESTAURANT.noAmount);

    const totalAmountAfterDiscountMessage = `${(eventImplementInfo.totalAmount - totalDiscountAmount).toLocaleString()}${RESTAURANT.amountUnit}`;

    return `${OUTPUT_MESSAGE.totalAmountAfterDiscount}${totalAmountAfterDiscountMessage}`;
  },

  badgeAward({ eventImplementInfo }) {
    const badgeAwardMessage = eventImplementInfo.badgeAward || RESTAURANT.nothing;

    return `${OUTPUT_MESSAGE.badgeAward}${badgeAwardMessage}`;
  },
};

export default OutputView;
