import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constant/message.js";
import { DATE_VALIDATOR } from "../utils/validation.js";

const InputView = {
  async readDate() {
    const date = await Console.readLineAsync(INPUT_MESSAGE.date);

    Object.values(DATE_VALIDATOR).forEach((validator) => {
      validator(date);
    });

    return Number(date);
  },

  async readMenuList() {
    const menuListInput = await Console.readLineAsync(INPUT_MESSAGE.menuList);
    return menuListInput.split(",").reduce((menuList, menuWithCount) => {
      const [menu, count] = menuWithCount.trim().split("-");
      if (menu && count) menuList[menu.trim()] = Number(count);
      return menuList;
    }, {});
  },
};

export default InputView;
