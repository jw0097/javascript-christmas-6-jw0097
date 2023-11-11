import RestaurantEvent from "./RestaurantEvent.js";

class XmasDdayDiscount extends RestaurantEvent {
  implement({ date }) {
    if (date > 25) return;
    return { xmasDdayDiscount: 1000 + (date - 1) * 100 };
  }
}

export default XmasDdayDiscount;
