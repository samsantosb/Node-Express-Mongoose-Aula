import { PetService } from "../services/pet.service";
import { fakePetData, fakeId, updatedPet } from "./fake.pet.data";

export const fakePetService = {
  getAll: () => Promise.resolve(fakePetData),
  getById: () => Promise.resolve(fakePetData[0]),
  create: () => Promise.resolve(fakePetData[1]),
  update: () => Promise.resolve(updatedPet),
  delete: () => Promise.resolve(fakePetData[0]),
} as unknown as PetService;
