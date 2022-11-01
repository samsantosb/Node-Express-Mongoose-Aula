import { Pet, PetModel } from "../models/pet.model";
import { Model } from "mongoose";

export class PetRepository {
  constructor(private readonly petModel: Model<Pet>) {}

  async getAll(): Promise<Pet[]> {
    const pets = await this.petModel.find();

    return pets;
  }

  async getById(id: string): Promise<Pet> {
    const pet = await this.petModel.findById(id);

    if (pet === null) {
      return {} as Pet;
    }

    return pet;
  }

  async create(pet: Pet): Promise<Pet> {
    const newPet = this.petModel.create(pet);
    return newPet;
  }

  async update(id: string, pet: Pet): Promise<Pet> {
    const updatedPet = await this.petModel.findByIdAndUpdate(id, pet, {
      new: true,
    });

    if (updatedPet === null) {
      return {} as Pet;
    }

    return updatedPet;
  }

  async delete(id: string): Promise<Pet> {
    const deletedPet = await this.petModel.findByIdAndDelete(id);

    if (deletedPet === null) {
      return {} as Pet;
    }

    return deletedPet;
  }
}
