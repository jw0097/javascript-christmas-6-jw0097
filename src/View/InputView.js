import { INPUT_MESSAGE } from "../constant/message";

const InputView = {
  async readDate() {
    const date = await Console.readLineAsync(INPUT_MESSAGE.date);
  },
};

export default InputView;
