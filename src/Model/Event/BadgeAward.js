import { BADGE_AWARD_CONDITION } from "../../constant/restaurant.js";

class BadgeAward {
  implement(eventImplementAmount) {
    const badgeAward = Object.entries(BADGE_AWARD_CONDITION).reduce(
      (acc, [badge, [min, max]]) => {
        if (eventImplementAmount >= min && eventImplementAmount < max)
          acc = badge;
        return acc;
      },
      undefined
    );

    return badgeAward && { badgeAward };
  }
}

export default BadgeAward;
