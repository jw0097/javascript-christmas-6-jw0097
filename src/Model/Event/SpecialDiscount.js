import RestaurantEvent from "./RestaurantEvent.js";
import { STAR_DAY } from "../../constant/restaurant.js";

class SpecialDiscount extends RestaurantEvent {
  implement({ date, totalAmount }) {
    if (!STAR_DAY.includes(date) || totalAmount < 10000) return;

    return { specialDiscount: 1000 };
  }
}

export default SpecialDiscount;
