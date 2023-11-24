import RestaurantEvent from "./RestaurantEvent.js";
import { EVENT } from "../../constant/restaurant.js";

class XmasDdayDiscount extends RestaurantEvent {
  implement({ date, totalAmount }) {
    if (date > EVENT.christmasDate || totalAmount < EVENT.minTotalAmount) return;
    
    return { xmasDdayDiscount: EVENT.initialXmasDiscountValue + (date - EVENT.dateMinusValue) * EVENT.xmasDdayDiscountUnit };
  }
}

export default XmasDdayDiscount;
