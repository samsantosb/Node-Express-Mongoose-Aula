import { fakePetData, updatedPet, fakeId } from "./../__mocks__/fake.pet.data";
import { fakePetRepository } from "../__mocks__/fake.pet.repository";
import { PetService } from "./pet.service";
import { jest, describe, it, expect } from "@jest/globals";
import { invalidIdError } from "../../utils/error.handler";

const petService = new PetService(fakePetRepository);

describe("PetService", () => {
  describe("getAll", () => {
    it("should call Repository.getAll", async () => {
      //criamos um spy que observa o fakePetRepository
      const spy = jest.spyOn(fakePetRepository, "getAll");

      //chamamos o método getAll do service
      await petService.getAll();

      //verificamos se o método foi chamado
      expect(spy).toHaveBeenCalled();
    });
    it("should return a list of pets", async () => {
      const pets = await petService.getAll();
      expect(pets).toEqual(fakePetData);
    });
    it("should return an promiseError", async () => {
      //simulando uma situação de erro
      jest.spyOn(fakePetRepository, "getAll").mockRejectedValueOnce("Error");

      //atribui esse erro a uma consntante
      const error = await petService.getAll();

      //verifica se o erro foi tratado de devida forma
      expect(error).toEqual({
        promiseError: {
          message: "unable to request the Database",
          error: "Error",
        },
      });
    });
  });

  describe("getById", () => {
    it("should call Repository.getById", async () => {
      const spy = jest.spyOn(fakePetRepository, "getById");
      await petService.getById(fakeId);
      expect(spy).toHaveBeenCalled();
    });
    it("should return a pet", async () => {
      const pet = await petService.getById(fakeId);
      expect(pet).toEqual(fakePetData[0]);
    });
    it("should return an promiseError", async () => {
      jest.spyOn(fakePetRepository, "getById").mockRejectedValueOnce("Error");
      const error = await petService.getById(fakeId);
      expect(error).toEqual({
        promiseError: {
          message: "unable to request the Database",
          error: "Error",
        },
      });
    });
    it("should return a invalidIdError", async () => {
      const error = await petService.getById("invalidId");
      expect(error).toEqual(invalidIdError("invalidId"));
    });
  });

  describe("create", () => {
    it("should call Repository.create", async () => {
      const spy = jest.spyOn(fakePetRepository, "create");
      await petService.create(fakePetData[0]);
      expect(spy).toHaveBeenCalled();
    });
    it("should return a pet", async () => {
      const pet = await petService.create(fakePetData[1]);
      expect(pet).toEqual(fakePetData[1]);
    });
    it("should return an promiseError", async () => {
      jest.spyOn(fakePetRepository, "create").mockRejectedValueOnce("Error");
      const error = await petService.create(fakePetData[1]);
      expect(error).toEqual({
        promiseError: {
          message: "unable to request the Database",
          error: "Error",
        },
      });
    });
  });

  describe("update", () => {
    it("should call Repository.update", async () => {
      const spy = jest.spyOn(fakePetRepository, "update");
      await petService.update(fakeId, updatedPet);
      expect(spy).toHaveBeenCalled();
    });
    it("should return a pet", async () => {
      const pet = await petService.update(fakeId, updatedPet);
      expect(pet).toEqual(updatedPet);
    });
    it("should return an promiseError", async () => {
      jest.spyOn(fakePetRepository, "update").mockRejectedValueOnce("Error");
      const error = await petService.update(fakeId, updatedPet);
      expect(error).toEqual({
        promiseError: {
          message: "unable to request the Database",
          error: "Error",
        },
      });
    });

    it("should return a invalidIdError", async () => {
      const error = await petService.update("invalidId", updatedPet);
      expect(error).toEqual(invalidIdError("invalidId"));
    });
  });
  describe("delete", () => {
    it("should call Repository.delete", async () => {
      const spy = jest.spyOn(fakePetRepository, "delete");
      await petService.delete(fakeId);
      expect(spy).toHaveBeenCalled();
    });
    it("should return a pet", async () => {
      const pet = await petService.delete(fakeId);
      expect(pet).toEqual(fakePetData[0]);
    });
    it("should return an promiseError", async () => {
      //equivalente ao Promise.Reject
      jest.spyOn(fakePetRepository, "delete").mockRejectedValueOnce("Error");
      const error = await petService.delete(fakeId);
      expect(error).toEqual({
        promiseError: {
          message: "unable to request the Database",
          error: "Error",
        },
      });
    });
    it("should return a invalidIdError", async () => {
      const error = await petService.delete("invalidId");
      expect(error).toEqual(invalidIdError("invalidId"));
    });
  });
});
