import RestaurantEvent from "./RestaurantEvent.js";
import { DESSERT, EVENT, RESTAURANT, WEEKDAY } from "../../constant/restaurant.js";

class WeekdayDiscount extends RestaurantEvent {
  implement({ date, menuList, totalAmount }) {
    const day = this._calculateDayFromDate(date);
    const dessertCount = this._calculateDishCount(menuList, DESSERT);
    
    if (!WEEKDAY.includes(day) || dessertCount === RESTAURANT.initialCount || totalAmount < EVENT.minTotalAmount) return;

    return { weekdayDiscount: dessertCount * EVENT.weekDiscountUnit };
  }
}

export default WeekdayDiscount;
