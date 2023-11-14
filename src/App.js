import BadgeAward from "./Model/Event/BadgeAward.js";
import Giveaway from "./Model/Event/GiveAway.js";
import SpecialDiscount from "./Model/Event/SpecialDiscount.js";
import WeekdayDiscount from "./Model/Event/WeekDayDiscount.js";
import WeekendDiscount from "./Model/Event/WeekendDiscount.js";
import XmasDdayDiscount from "./Model/Event/XmasDdayDiscount.js";
import Restaurant from "./Model/Restaurant.js";
import InputView from "./View/InputView.js";
import OutputView from "./View/OutputView.js";
import { OUTPUT_MESSAGE } from "./constant/message.js";

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
    await this.#implementEvent();
  }

  async #implementEvent() {
    OutputView.printMessage(OUTPUT_MESSAGE.welcome);
    const { date, menuList } = await this.#takeOrder();
    OutputView.printMessage(OUTPUT_MESSAGE.beforeEventInfo);
    const eventImplementInfo = this.#restaurant.implementEvent({ date, menuList });
    OutputView.printEventImplementInfo({ menuList, eventImplementInfo });
  }

  async #takeOrder() {
    const date = await InputView.readDate();
    const menuList = await InputView.readMenuList();

    return { date, menuList };
  }
}

export default App;
