import RestaurantEvent from "./RestaurantEvent.js";
import { EVENT, MAIN_DISH, RESTAURANT, WEEKEND } from "../../constant/restaurant.js";

class WeekendDiscount extends RestaurantEvent {
  implement({ date, menuList, totalAmount }) {
    const day = this._calculateDayFromDate(date);
    const mainDishCount = this._calculateDishCount(menuList, MAIN_DISH);

    if (!WEEKEND.includes(day) || mainDishCount === RESTAURANT.initialCount || totalAmount < EVENT.minTotalAmount) return;

    return { weekendDiscount: mainDishCount * EVENT.weekDiscountUnit };
  }
}

export default WeekendDiscount;
