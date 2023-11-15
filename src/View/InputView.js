import { Console } from "@woowacourse/mission-utils";
import { DATE_VALIDATOR, MENU_VALIDATOR } from "../utils/validation.js";
import { INPUT_MESSAGE, MESSAGE_FACTOR } from "../constant/message.js";

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
    const menuListObject = menuListInput.split(MESSAGE_FACTOR.stringSeperator).reduce((menuList, menuWithCount) => {
      const [menu, count] = menuWithCount.trim().split(MESSAGE_FACTOR.menuCountSeperator);
      if (menu && count) menuList[menu.trim()] = Number(count);
      return menuList;
    }, {});

    Object.values(MENU_VALIDATOR).forEach((validator) => {
      validator({ menuListObject, menuListInput });
    });

    return menuListObject;
  },
};

export default InputView;
