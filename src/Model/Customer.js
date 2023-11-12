class Customer {
  #orderInfo;

  #badge = null;

  constructor(orderInfo) {
    this.#orderInfo = orderInfo;
  }

  getOrderInfo() {
    return this.#orderInfo;
  }
}

export default Customer;
