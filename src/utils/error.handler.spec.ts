import { promiseError, invalidIdError } from "./error.handler";

describe("error.handler", () => {
  describe("promiseError", () => {
    it("should be defined", () => {
      const error = promiseError("error");
      expect(error).toBeDefined();
    });
    it("should return an object with a promiseError property", () => {
      const error = promiseError("error");
      expect(error.promiseError).toBeDefined();
    });
    it("should return an object with a promiseError property with a message property", () => {
      const error = promiseError("error");
      expect(error).toEqual({
        promiseError: {
          message: "unable to request the Database",
          error: "error",
        },
      });
    });
  });
  describe("invalidIdError", () => {});
});
