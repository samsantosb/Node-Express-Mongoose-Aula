import { fakePetData, updatedPet, fakeId } from "./../__mocks__/fake.pet.data";
import { fakePetModel } from "../__mocks__/fake.pet.model";
import { PetRepository } from "./pet.repository";
import { jest } from "@jest/globals";

const petRepository = new PetRepository(fakePetModel);

describe("PetRepository", () => {
  describe("getAll", () => {
    it("should return a list of pets", async () => {
      const pets = await petRepository.getAll();
      expect(pets).toEqual(fakePetData);
    });
    it("should return an empty array", async () => {
      //o spyOn entra no fakePetModel e substitui o find por uma função de
      //retorno vazio
      jest.spyOn(fakePetModel, "find").mockResolvedValueOnce([]);

      const pets = await petRepository.getAll();
      expect(pets).toEqual([]);
    });
  });
  describe("getById", () => {
    it("should return a pet", async () => {
      const pet = await petRepository.getById(fakeId);
      expect(pet).toEqual(fakePetData[0]);
    });
    it("should return an empty object", async () => {
      jest.spyOn(fakePetModel, "findById").mockResolvedValueOnce(null);

      const pet = await petRepository.getById(fakeId);
      expect(pet).toEqual({});
    });
  });
  describe("create", () => {
    it("should create a pet", async () => {
      const newPet = await petRepository.create(fakePetData[0]);
      expect(newPet).toEqual(fakePetData[0]);
    });
  });
  describe("update", () => {
    it("should update a pet", async () => {
      const pet = await petRepository.update(fakeId, fakePetData[0]);
      expect(pet).toEqual(updatedPet);
    });
    it("should return an empty object", async () => {
      jest.spyOn(fakePetModel, "findByIdAndUpdate").mockResolvedValueOnce(null);

      const pet = await petRepository.update(fakeId, fakePetData[0]);
      expect(pet).toEqual({});
    });
  });
  describe("delete", () => {
    it("should delete a pet", async () => {
      const pet = await petRepository.delete(fakeId);
      expect(pet).toEqual(fakePetData[0]);
    });
    it("should return an empty object", async () => {
      jest.spyOn(fakePetModel, "findByIdAndDelete").mockResolvedValueOnce(null);

      const pet = await petRepository.delete(fakeId);
      expect(pet).toEqual({});
    });
  });
});
