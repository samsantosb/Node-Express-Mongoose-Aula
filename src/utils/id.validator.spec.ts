import { isIdValid } from "./id.validator";

describe("id.validator", () => {
  describe("isIdValid", () => {
    it("should be defined", () => {
      expect(isIdValid).toBeDefined();
    });
    it("should return true", () => {
      const result = isIdValid("5f6f1e8d4a6a0c0e4c0e1b8a");
      expect(result).toBeTruthy();
    });
    it("should return false", () => {
      const result = isIdValid("invalidId");
      expect(result).toBeFalsy();
    });
  });
});
