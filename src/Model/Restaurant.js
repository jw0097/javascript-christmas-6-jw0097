import Customer from "./Customer.js";
import { Console } from "@woowacourse/mission-utils";
class Restaurant {
  #events;

  #badgeAward;

  #customer;

  constructor({ events, badgeAward }) {
    this.#events = events;
    this.#badgeAward = badgeAward;
  }

  saveCustomerInfo(orderInfo) {
    this.#customer = new Customer(orderInfo);
  }
}

export default Restaurant;
