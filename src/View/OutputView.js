import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constant/message.js";
import { ALL_MENU, DISCOUNT_EVENT_LIST, EVENT_LIST } from "../constant/restaurant.js";

const OutputView = {
  printMessage(message) {
    Console.print(message);
  },

  printEventImplementInfo({ menuList, eventImplementInfo }) {
    const eventImplementInfoMessage = Object.values(messageGenerator)
      .map((generator) => {
        return generator({ menuList, eventImplementInfo });
      })
      .join("\n");

    Console.print(eventImplementInfoMessage);
  },
};

const messageGenerator = {
  menuList({ menuList }) {
    const menuListMessage = Object.entries(menuList)
      .map(([menu, count]) => `${menu} ${count}개`)
      .join("\n");

    return `${OUTPUT_MESSAGE.menuList}${menuListMessage}`;
  },

  totalAmount({ eventImplementInfo }) {
    const totalAmountMessage = `${eventImplementInfo.totalAmount.toLocaleString()}원`;

    return `${OUTPUT_MESSAGE.totalAmount}${totalAmountMessage}`;
  },

  giveaway({ eventImplementInfo }) {
    const giveawayMessage = eventImplementInfo.giveaway ? `${eventImplementInfo.giveaway} 1개` : "없음";

    return `${OUTPUT_MESSAGE.giveaway}${giveawayMessage}`;
  },

  detailImplement({ eventImplementInfo }) {
    const detailImplementMessage = Object.entries(eventImplementInfo).reduce((acc, [eventName, amount]) => {
      if (EVENT_LIST.hasOwnProperty(eventName)) {
        const amountString = eventName === "giveaway" ? ALL_MENU[amount] : amount;
        acc.push(`${EVENT_LIST[eventName]}: -${amountString.toLocaleString()}원`);
      }
        return acc;
      }, [])
      .join("\n") || "없음";

    return `${OUTPUT_MESSAGE.detailImplement}${detailImplementMessage}`;
  },

  eventImplementAmount({ eventImplementInfo }) {
    const eventImplementAmountMessage = eventImplementInfo.eventImplementAmount
      ? `-${eventImplementInfo.eventImplementAmount.toLocaleString()}원`
      : "0원";

    return `${OUTPUT_MESSAGE.eventImplementAmount}${eventImplementAmountMessage}`;
  },

  totalAmountAfterDiscount({ eventImplementInfo }) {
    const totalDiscountAmount = Object.entries(eventImplementInfo).reduce((acc, [eventName, amount]) => {
      if (DISCOUNT_EVENT_LIST.includes(eventName)) acc += amount;
      return acc;
    }, 0);

    const totalAmountAfterDiscountMessage = `${(eventImplementInfo.totalAmount - totalDiscountAmount).toLocaleString()}원`;

    return `${OUTPUT_MESSAGE.totalAmountAfterDiscount}${totalAmountAfterDiscountMessage}`;
  },

  badgeAward({ eventImplementInfo }) {
    const badgeAwardMessage = eventImplementInfo.badgeAward || "없음";

    return `${OUTPUT_MESSAGE.badgeAward}${badgeAwardMessage}`;
  },
};

export default OutputView;
