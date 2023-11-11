class RestaurantEvent {
  constructor() {
    if (new.target === RestaurantEvent) {
      throw new Error("RestaurantEvent 인스턴스를 생성할 수 없습니다.");
    }
  }
  implement() {
    throw new Error("implement를 오버라이딩하고 사욯해야 합니다.");
  }
}

export default RestaurantEvent;
