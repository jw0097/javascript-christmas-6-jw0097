class Customer {
  // 1월 이벤트에 사용할 고객 정보 저장
  #orderInfo;

  #badge = null;

  constructor(orderInfo) {
    this.#orderInfo = orderInfo;
  }
}

export default Customer;
