import RestaurantEvent from "./RestaurantEvent.js";

class XmasDdayDiscount extends RestaurantEvent {
  implement({ date, totalAmount }) {
    if (date > 25 || totalAmount < 10000) return;
    return { xmasDdayDiscount: 1000 + (date - 1) * 100 };
  }
}

export default XmasDdayDiscount;
