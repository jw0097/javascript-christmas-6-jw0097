import BadgeAward from "../../../src/Model/Event/BadgeAward.js";

let badgeAward;
describe("BadgeAward 클래스 테스트", () => {
  beforeEach(() => {
    badgeAward = new BadgeAward();
  });
  describe("implement 메서드 테스트", () => {
    test("BadgeAward 클래스는 implement 메서드를 가지고 있어야 한다.", () => {
      expect(typeof badgeAward.implement).toBe("function");
    });

    test.each([
      [0, undefined],
      [1000, undefined],
      [2000, undefined],
      [4999, undefined],
    ])("%s가 인자로 들어오면 반환값이 없어야 한다.", (eventImplementAmount, badge) => {
      const expectedBadge = badgeAward.implement(eventImplementAmount);
      expect(expectedBadge).toBe(badge);
    });

    test.each([
      [5000, "별"],
      [6000, "별"],
      [7000, "별"],
      [9999, "별"],
    ])("%s가 인자로 들어오면 %s을 반환해야 한다.", (eventImplementAmount, badge) => {
      const expectedBadge = badgeAward.implement(eventImplementAmount);
      expect(expectedBadge.badgeAward).toBe(badge);
    });

    test.each([
      [10000, "트리"],
      [11000, "트리"],
      [15000, "트리"],
      [19999, "트리"],
    ])("%s가 인자로 들어오면 %s을 반환해야 한다.", (eventImplementAmount, badge) => {
      const expectedBadge = badgeAward.implement(eventImplementAmount);
      expect(expectedBadge.badgeAward).toBe(badge);
    });

    test.each([
      [20000, "산타"],
      [21000, "산타"],
      [25000, "산타"],
      [50000, "산타"],
    ])("%s가 인자로 들어오면 %s을 반환해야 한다.", (eventImplementAmount, badge) => {
      const expectedBadge = badgeAward.implement(eventImplementAmount);
      expect(expectedBadge.badgeAward).toBe(badge);
    });
  });
});
