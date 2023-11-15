import RestaurantEvent from "./RestaurantEvent.js";
import { EVENT, RESTAURANT } from "../../constant/restaurant.js";

class Giveaway extends RestaurantEvent {
  implement({ totalAmount }) {
    if (totalAmount < EVENT.giveawayThreshold) return;
    
    return { giveaway: RESTAURANT.giveaway };
  }
}

export default Giveaway;
