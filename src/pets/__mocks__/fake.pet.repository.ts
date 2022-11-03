import { fakePetData, fakeId, updatedPet } from "./fake.pet.data";
import { PetRepository } from "../repositories/pet.repository"; //vamos usar pra tipar

/*
O Repositorio falso/mock é encarregado de simular um repositorio real,
ele não se conecta com o banco de dados, ele apenas simula o comportamento
dessa forma, podemos testar o serviço sem precisar de um banco de dados
*/

export const fakePetRepository = {
  getAll: () => Promise.resolve(fakePetData),
  //getAll: () => Promise.reject("Error"), -> cenário de exceção, o spy cria esse cara
  getById: () => Promise.resolve(fakePetData[0]),
  create: () => Promise.resolve(fakePetData[1]),
  update: () => Promise.resolve(updatedPet),
  delete: () => Promise.resolve(fakePetData[0]),
} as unknown as PetRepository;
