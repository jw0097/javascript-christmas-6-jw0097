import RestaurantEvent from "./RestaurantEvent.js";
import { DESSERT, WEEKDAY } from "../../constant/restaurant.js";

class WeekdayDiscount extends RestaurantEvent {
  implement({ date, menuList, totalAmount }) {
    const day = this._calculateDayFromDate(date);
    const dessertCount = this._calculateDishCount(menuList, DESSERT);
    
    if (!WEEKDAY.includes(day) || dessertCount === 0 || totalAmount < 10000) return;

    return { weekdayDiscount: dessertCount * 2023 };
  }
}

export default WeekdayDiscount;
