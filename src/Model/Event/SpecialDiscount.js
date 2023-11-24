import RestaurantEvent from "./RestaurantEvent.js";
import { EVENT, STAR_DAY } from "../../constant/restaurant.js";

class SpecialDiscount extends RestaurantEvent {
  implement({ date, totalAmount }) {
    if (!STAR_DAY.includes(date) || totalAmount < EVENT.minTotalAmount) return;

    return { specialDiscount: EVENT.specialDiscountUnit };
  }
}

export default SpecialDiscount;
