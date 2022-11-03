import { PetService } from "../services/pet.service";
import { StatusCode } from "../../utils/status.code";
import { Request, Response } from "express";

export class PetController {
  constructor(private readonly petService: PetService) {}

  async getAll(req, res) {}
  async getById(req, res) {}
  async create(req, res) {}
  async update(req, res) {}
  async delete(req, res) {}
}
