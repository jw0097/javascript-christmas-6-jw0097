import BadgeAward from "./Model/Event/BadgeAward";
import Giveaway from "./Model/Event/GiveAway";
import SpecialDiscount from "./Model/Event/SpecialDiscount";
import WeekdayDiscount from "./Model/Event/WeekDayDiscount";
import WeekendDiscount from "./Model/Event/WeekendDiscount";
import XmasDdayDiscount from "./Model/Event/XmasDdayDiscount";
import Restaurant from "./Model/Restaurant";
import InputView from "./View/InputView";

class App {
  // DI, 1월에 이벤트 정책이 바뀌어도 이 부분만 수정하면 된다.
  #restaurant = new Restaurant({
    events: [
      new XmasDdayDiscount(),
      new WeekdayDiscount(),
      new WeekendDiscount(),
      new SpecialDiscount(),
      new Giveaway(),
    ],
    badgeAward: new BadgeAward(),
  });

  async run() {
    await this.#takeOrder();
  }

  async #takeOrder() {
    const date = await InputView.readDate();
    const menuList = await InputView.readMenuList();

    this.#restaurant.makeOrder({ date, menuList });
  }
}

export default App;
