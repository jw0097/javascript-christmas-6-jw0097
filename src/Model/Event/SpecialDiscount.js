import { STAR_DAY } from "../../constant/restaurant.js";
import RestaurantEvent from "./RestaurantEvent.js";

class SpecialDiscount extends RestaurantEvent {
  implement({ date }) {
    if (!STAR_DAY.includes(date)) return;
    return { specialDiscount: 1000 };
  }
}

export default SpecialDiscount;
