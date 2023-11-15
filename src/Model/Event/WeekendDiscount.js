import RestaurantEvent from "./RestaurantEvent.js";
import { MAIN_DISH, WEEKEND } from "../../constant/restaurant.js";

class WeekendDiscount extends RestaurantEvent {
  implement({ date, menuList, totalAmount }) {
    const day = this._calculateDayFromDate(date);
    const mainDishCount = this._calculateDishCount(menuList, MAIN_DISH);

    if (!WEEKEND.includes(day) || mainDishCount === 0 || totalAmount < 10000) return;

    return { weekendDiscount: mainDishCount * 2023 };
  }
}

export default WeekendDiscount;
