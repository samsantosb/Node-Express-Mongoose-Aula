import { Pet } from "../models/pet.model";

//esse é o mock de um ID padrão da mongo
export const fakeId = "632130d41623c49bf7b1c7e9";

//esse é o mock do banco de dados
export const fakePetData: Pet[] = [
  {
    name: "Polar",
    age: 1,
    animalType: "Dog",
    color: "Black",
  },
  {
    name: "Alaska",
    age: 2,
    animalType: "Cat",
    color: "White",
  },
  {
    name: "Costelinha",
    age: 3,
    animalType: "Bird",
    color: "Yellow",
  },
];

export const updatedPet: Pet = {
  name: "Polar-O-Cão-Idoso",
  age: 30,
  animalType: "Dog",
  color: "Black",
};
