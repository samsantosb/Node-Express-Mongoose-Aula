import { PetService } from "../services/pet.service";

export class PetController {
  constructor(private readonly petService: PetService) {}
}
