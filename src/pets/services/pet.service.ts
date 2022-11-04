import { Pet } from "../models/pet.model";
import { PetRepository } from "../repositories/pet.repository";
import {
  CustomErrors,
  invalidIdError,
  promiseError,
} from "../../utils/error.handler";
import { isIdValid } from "../../utils/id.validator";

export class PetService {
  constructor(private readonly petRepository: PetRepository) {}

  async getAll(): Promise<Pet[] | CustomErrors> {
    try {
      const pets = await this.petRepository.getAll();
      return pets;
    } catch (error) {
      return promiseError(error);
    }
  }

  async getById(id: string): Promise<Pet | CustomErrors> {
    //Type.ObjectId.isValid() checa se o id é um ObjectId válido
    //ele retorna um boolean, dessa forma, tratamos erros de ID inválido
    if (!isIdValid(id)) {
      return invalidIdError(id);
    }

    try {
      const pet = await this.petRepository.getById(id);
      return pet;
    } catch (error) {
      return promiseError(error);
    }
  }

  async create(pet: Pet): Promise<Pet | CustomErrors> {
    try {
      const newPet = await this.petRepository.create(pet);
      return newPet;
    } catch (error) {
      return promiseError(error);
    }
  }

  async update(id: string, pet: Pet): Promise<Pet | CustomErrors> {
    if (!isIdValid(id)) {
      return invalidIdError(id);
    }

    try {
      const updatedPet = await this.petRepository.update(id, pet);
      return updatedPet;
    } catch (error) {
      return promiseError(error);
    }
  }

  async delete(id: string): Promise<Pet | CustomErrors> {
    if (!isIdValid(id)) {
      return invalidIdError(id);
    }

    try {
      const deletedPet = await this.petRepository.delete(id);
      return deletedPet;
    } catch (error) {
      return promiseError(error);
    }
  }
}
