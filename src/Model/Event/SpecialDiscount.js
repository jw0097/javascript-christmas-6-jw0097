import { STAR_DAY } from "../../constant/restaurant";
import RestaurantEvent from "./RestaurantEvent";

class SpecialDiscount extends RestaurantEvent {
  implement({ date }) {
    if (!STAR_DAY.includes(date)) return;
    return { specialDiscount: 1000 };
  }
}

export default SpecialDiscount;
