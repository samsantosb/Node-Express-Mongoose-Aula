import { fakePetData, updatedPet, fakeId } from "./../__mocks__/fake.pet.data";
import { fakePetModel } from "../__mocks__/fake.pet.model";
import { PetRepository } from "./pet.repository";
import { jest } from "@jest/globals";

const petRepository = new PetRepository(fakePetModel);
