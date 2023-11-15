import { EVENT, RESTAURANT } from "../../constant/restaurant.js";

class RestaurantEvent {
  constructor() {
    if (new.target === RestaurantEvent) 
      throw new Error("RestaurantEvent 인스턴스를 생성할 수 없습니다.");
  }

  implement() {
    throw new Error("implement를 오버라이딩하고 사욯해야 합니다.");
  }

  _calculateDayFromDate(date) {
    return new Date(EVENT.eventYear, EVENT.eventMonth, date).getDay();
  }

  _calculateDishCount(menuList, dish) {
    return Object.entries(menuList).reduce((dishCount, [menu, count]) => {
      return Object.keys(dish).includes(menu) ? dishCount + count : dishCount;
    }, RESTAURANT.initialCount);
  }
}

export default RestaurantEvent;
