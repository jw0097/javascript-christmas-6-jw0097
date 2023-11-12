import { DESSERT, WEEKDAY } from "../../constant/restaurant";
import RestaurantEvent from "./RestaurantEvent";

class WeekdayDiscount extends RestaurantEvent {
  implement({ date, menuList }) {
    const day = this.#calculateDayFromDate(date);
    const dessertCount = this.#calculateDessertCount(menuList);
    if (!WEEKDAY.includes(day) || dessertCount === 0) return;
    return { weekdayDiscount: dessertCount * 2023 };
  }

  #calculateDayFromDate(date) {
    return new Date(2023, 11, date).getDay();
  }

  #calculateDessertCount(menuList) {
    return Object.entries(menuList).reduce((dessertCount, [menu, count]) => {
      return Object.keys(DESSERT).includes(menu) ? dessertCount + count : dessertCount;
    }, 0);
  }
}

export default WeekdayDiscount;
