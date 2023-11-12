import Customer from "./Customer";

class Restaurant {
  #events;

  #badgeAward;

  #customer;

  constructor({ events, badgeAward }) {
    this.#events = events;
    this.#badgeAward = badgeAward;
  }

  makeOrder({ date, menuList }) {
    this.#customer = new Customer({ date, menuList });
  }
}

export default Restaurant;
