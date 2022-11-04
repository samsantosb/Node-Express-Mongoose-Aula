import { PetService } from "../services/pet.service";
import { StatusCode } from "../../utils/status.code";
import { Request, Response } from "express";

export class PetController {
  constructor(private readonly petService: PetService) {}

  async getAll(req: Request, res: Response) {
    const result = await this.petService.getAll();

    //existe pets.promiseError??
    if ("promiseError" in result) {
      return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
    }

    return res.status(StatusCode.OK).json(result);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;

    const result = await this.petService.getById(id);

    if ("promiseError" in result) {
      return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
    }

    if ("invalidIdError" in result) {
      return res.status(StatusCode.BAD_REQUEST).json(result);
    }

    return res.status(StatusCode.OK).json(result);
  }

  async create(req: Request, res: Response) {
    const { body } = req;

    const result = await this.petService.create(body);

    if ("promiseError" in result) {
      return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
    }

    return res.status(StatusCode.CREATED).json(result);
  }

  async update(req: Request, res: Response) {
    // req.body -> Body/JSON
    // req.params -> URL Params
    // req.query  -> Query Params

    const { id } = req.params;
    const { body } = req;

    const result = await this.petService.update(id, body);

    if ("promiseError" in result) {
      return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
    }

    if ("invalidIdError" in result) {
      return res.status(StatusCode.BAD_REQUEST).json(result);
    }

    return res.status(StatusCode.OK).json(result);
  }

  async delete(req: Request, res: Response) {}
}
