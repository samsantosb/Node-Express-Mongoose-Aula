import { petFactory } from "./pet.factory";

describe("UserFactory", () => {
  it("should create the user Domain", () => {
    expect(petFactory()).toBeDefined();
  });
});
