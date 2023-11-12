import { DESSERT, WEEKDAY } from "../../constant/restaurant";
import RestaurantEvent from "./RestaurantEvent";

class WeekdayDiscount extends RestaurantEvent {
  implement({ date, menuList }) {
    const day = this._calculateDayFromDate(date);
    const dessertCount = this._calculateDishCount(menuList, DESSERT);
    if (!WEEKDAY.includes(day) || dessertCount === 0) return;
    return { weekdayDiscount: dessertCount * 2023 };
  }
}

export default WeekdayDiscount;
