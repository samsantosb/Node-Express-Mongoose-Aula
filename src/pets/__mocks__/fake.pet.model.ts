import { Model } from "mongoose";
import { Pet, PetModel } from "../models/pet.model";
import { fakeId, fakePetData, updatedPet } from "./fake.pet.data";

export const fakePetModel = {
  find: () => Promise.resolve(fakePetData),
  findId: () => Promise.resolve(fakePetData[0]),
  create: () => Promise.resolve(fakePetData[0]),
  findByIdAndUpdate: () => Promise.resolve(updatedPet),
  findByIdAndDelete: () => Promise.resolve(fakePetData[0]),
} as unknown as Model<Pet>;

/*
Quando vamos tipar uma bibilioteca de terceeiros, com tipos muito complexos
caso isso venha a atrapalhar o desenvolvimento, podemos usar o unknown

as unknown as Model<Pet>
as unknown as CustomType

unkown é desconhecido

O unknown é um tipo que não é nem number,
nem string, nem boolean, nem nada
*/
