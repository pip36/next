import { paramSingle } from "../../utils/urlHelper";

describe("urlHelper", () => {
  describe("paramSingle() - Casts param to single element", () => {
    it.each`
      param               | expected
      ${""}               | ${""}
      ${"a"}              | ${"a"}
      ${["test"]}         | ${"test"}
      ${["test", "blah"]} | ${"test"}
      ${undefined}        | ${""}
    `("'$param' -> '$expected'", ({ param, expected }) => {
      expect(paramSingle(param)).toEqual(expected);
    });
  });
});
