import { mockResponse, mockRequest } from "../__mocks__/fake.pet.routes";
import { fakePetService } from "../__mocks__/fake.pet.service";
import { PetController } from "./pet.controller";
import { fakeId, fakePetData } from "../__mocks__/fake.pet.data";
import { StatusCode } from "../../utils/status.code";
import { invalidIdError, promiseError } from "../../utils/error.handler";

const petController = new PetController(fakePetService);
const req = mockRequest();
const res = mockResponse();

describe("PetController", () => {
  describe("getAll", () => {
    it("should return all pets", async () => {
      await petController.getAll(req, res);
      expect(res.json).toHaveBeenCalledWith(fakePetData);
    });
    it("should return status code 200", async () => {
      await petController.getAll(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
    });
    it("should return a promiseError", async () => {
      jest
        .spyOn(fakePetService, "getAll")
        .mockImplementation(() => Promise.resolve(promiseError("error")));

      await petController.getAll(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
    });
  });

  describe("getById", () => {
    it("should return a pet", async () => {
      req.params.id = fakeId;
      await petController.getById(req, res);
      expect(res.json).toHaveBeenCalledWith(fakePetData[0]);
    });
    it("should return status code 200", async () => {
      req.params.id = fakeId;
      await petController.getById(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
    });
    it("should return a promiseError", async () => {
      req.params.id = fakeId;
      jest
        .spyOn(fakePetService, "getById")
        .mockImplementation(() => Promise.resolve(promiseError("error")));

      await petController.getById(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
    });
    it("should return a invalidIdError", async () => {
      jest
        .spyOn(fakePetService, "getById")
        .mockImplementation(() => Promise.resolve(invalidIdError("id")));
      await petController.getById(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.BAD_REQUEST);
    });
  });

  describe("create", () => {
    it("should create a pet", async () => {
      req.body = fakePetData[1];
      await petController.create(req, res);
      expect(res.json).toHaveBeenCalledWith(fakePetData[1]);
    });
    it("should return status code 201", async () => {
      req.body = fakePetData[1];
      await petController.create(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.CREATED);
    });
    it("should return a promiseError", async () => {
      req.body = fakePetData[1];
      jest
        .spyOn(fakePetService, "create")
        .mockImplementation(() => Promise.resolve(promiseError("error")));

      await petController.create(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
    });
  });

  describe("update", () => {
    it("should update a pet", async () => {
      req.params.id = fakeId;
      req.body = fakePetData[1];
      await petController.update(req, res);
      expect(res.json).toHaveBeenCalledWith(fakePetData[1]);
    });
    it("should return status code 200", async () => {
      req.params.id = fakeId;
      req.body = fakePetData[1];
      await petController.update(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
    });
    it("should return a promiseError", async () => {
      req.params.id = fakeId;
      req.body = fakePetData[1];
      jest
        .spyOn(fakePetService, "update")
        .mockImplementation(() => Promise.resolve(promiseError("error")));

      await petController.update(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
    });
    it("should return a invalidIdError", async () => {
      req.params.id = fakeId;
      req.body = fakePetData[1];
      jest
        .spyOn(fakePetService, "update")
        .mockImplementation(() => Promise.resolve(invalidIdError("id")));

      await petController.update(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.BAD_REQUEST);
    });
  });

  describe("delete", () => {
    it("should delete a pet", async () => {
      req.params.id = fakeId;
      await petController.delete(req, res);
      expect(res.json).toHaveBeenCalledWith(fakePetData[0]);
    });
    it("should return status code 200", async () => {
      req.params.id = fakeId;
      await petController.delete(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
    });
    it("should return a promiseError", async () => {
      req.params.id = fakeId;
      jest
        .spyOn(fakePetService, "delete")
        .mockImplementation(() => Promise.resolve(promiseError("error")));

      await petController.delete(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
    });
    it("should return a invalidIdError", async () => {
      jest
        .spyOn(fakePetService, "delete")
        .mockImplementation(() => Promise.resolve(invalidIdError("id")));
      await petController.delete(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.BAD_REQUEST);
    });
  });
});
