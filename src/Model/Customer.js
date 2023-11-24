class Customer {
  // 1월 이벤트에 사용할 고객 정보 저장
  #orderInfo;

  #badge;

  constructor({ date, menuList, badgeAwardInfo }) {
    this.#orderInfo = { date, menuList };
    this.#badge = badgeAwardInfo;
  }
}

export default Customer;
