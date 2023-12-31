import Giveaway from "../../../src/Model/Event/Giveaway.js";
import RestaurantEvent from "../../../src/Model/Event/RestaurantEvent.js";

let giveaway;

describe("Giveaway 클래스 테스트", () => {
  beforeEach(() => {
    giveaway = new Giveaway();
  });

  test("Giveaway는 RestaurantEvent를 상속받아야 한다.", () => {
    // then
    expect(giveaway instanceof RestaurantEvent).toBe(true);
  });

  describe("implement 메서드 테스트", () => {
    test("Giveaway는 implement 메서드를 오버라이딩 해야 한다.", () => {
      // given
      const totalAmount = 120000;

      // when - then
      expect(() => giveaway.implement({ totalAmount })).not.toThrow(Error);
    });

    test.each([
      [120000, "샴페인"],
      [121000, "샴페인"],
      [200000, "샴페인"],
    ])("%s를 인자로 받으면 %s을 반환해야 한다.", (totalAmount, present) => {
      // when
      const presentStuff = giveaway.implement({ totalAmount });

      // then
      expect(presentStuff.giveaway).toBe(present);
    });

    test.each([
      [10000, undefined],
      [99999, undefined],
      [119999, undefined],
    ])("12만 이하를 인자로 받으면 반환값이 없어야 한다.", (totalAmount, present) => {
      // when
      const presentStuff = giveaway.implement({ totalAmount });

      // then
      expect(presentStuff).toBe(present);
    });
  });
});
