import { mockResponse, mockRequest } from "../__mocks__/fake.pet.routes";
import { fakePetService } from "../__mocks__/fake.pet.service";
import { PetController } from "./pet.controller";
import { fakeId, fakePetData } from "../__mocks__/fake.pet.data";
import { StatusCode } from "../../utils/status.code";

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
  });

  describe("delete", () => {});
});
