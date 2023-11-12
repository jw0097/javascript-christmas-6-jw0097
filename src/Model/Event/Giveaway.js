import RestaurantEvent from "./RestaurantEvent";

class Giveaway extends RestaurantEvent {
  implement({ totalAmount }) {
    if (totalAmount < 120000) return;
    return { giveaway: "샴페인" };
  }
}

export default Giveaway;
