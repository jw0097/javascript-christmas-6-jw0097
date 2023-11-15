import Customer from "./Customer.js";
import { ALL_MENU, RESTAURANT } from "../constant/restaurant.js";

class Restaurant {
  #events;

  #badgeAward;

  #customer;

  constructor({ events, badgeAward }) {
    this.#events = events;
    this.#badgeAward = badgeAward;
  }

  implementEvent({ date, menuList }) {
    const totalAmount = this.#calculateTotalAmount(menuList);
    const eventImplementInfo = this.#getEventImplementInfo({ date, menuList, totalAmount });
    const eventImplementAmount = this.#calculateEventImplementAmount(eventImplementInfo);
    const badgeAwardInfo = this.#getBadgeAwardInfo(eventImplementAmount);
    this.#saveCustomerInfo({ date, menuList, badgeAwardInfo });

    return { totalAmount, ...eventImplementInfo, eventImplementAmount, ...badgeAwardInfo };
  }

  #calculateTotalAmount(menuList) {
    return Object.entries(menuList).reduce((acc, [menu, count]) => {
      return acc + ALL_MENU[menu] * count;
    }, 0);
  }

  #getEventImplementInfo({ date, menuList, totalAmount }) {
    return this.#events.reduce((eventInfo, singleEvent) => {
      const result = singleEvent.implement({ date, menuList, totalAmount });

      return { ...eventInfo, ...result };
    }, {});
  }

  #calculateEventImplementAmount(eventImplementInfo) {
    return Object.values(eventImplementInfo).reduce((acc, amount) => {
      if (isNaN(amount)) return acc + ALL_MENU[RESTAURANT.giveaway];
      
      return acc + amount;
    }, 0);
  }

  #getBadgeAwardInfo(eventImplementAmount) {
    return this.#badgeAward.implement(eventImplementAmount);
  }

  #saveCustomerInfo({ date, menuList, badgeAwardInfo }) {
    this.#customer = new Customer({ date, menuList, badgeAwardInfo });
  }
}

export default Restaurant;
