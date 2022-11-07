import { Request } from "express";

export function invalidBody(req: Request) {
  const pet = {
    name: req.body.name,
    age: req.body.age,
    type: req.body.type,
    color: req.body.color,
  };

  const jsonPet = JSON.stringify(pet);
  const jsonBody = JSON.stringify(req.body);

  if (jsonPet !== jsonBody) {
    return true;
  }

  return false;
}
