import express from "express";
import { pet } from "../factories/pet.factory";

const petsRoutes = express.Router();

//o bind é encarregado de manter o escopo do this
petsRoutes.get("/", pet.getAll.bind(pet));
petsRoutes.get("/:id", pet.getById.bind(pet));
petsRoutes.post("/", pet.create.bind(pet));
petsRoutes.put("/:id", pet.update.bind(pet));
petsRoutes.delete("/:id", pet.delete.bind(pet));

export default petsRoutes;
