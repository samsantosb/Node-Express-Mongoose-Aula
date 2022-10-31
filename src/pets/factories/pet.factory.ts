import { PetService } from "./../services/pet.service";
import { PetRepository } from "./../repositories/pet.repository";
import { PetModel } from "../models/pet.model";
import { PetController } from "../controllers/pet.controller";

export function petFactory() {
  const petsRepository = new PetRepository(PetModel);
  const petsService = new PetService(petsRepository);
  const petsController = new PetController(petsService);
  return petsController;
}

export const pet = petFactory();
