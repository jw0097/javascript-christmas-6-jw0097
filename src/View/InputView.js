import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constant/message.js";

const InputView = {
  async readDate() {
    const date = await Console.readLineAsync(INPUT_MESSAGE.date);
    return Number(date);
  },
};

export default InputView;
