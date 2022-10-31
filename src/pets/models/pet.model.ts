import { Schema, model, Model, InferSchemaType } from "mongoose";

const petSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  animalType: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

//tipamos a Schema com o InferSchemaType, nativo da mongoose
export type Pet = InferSchemaType<typeof petSchema>;

//tipamos o model com o Pet(custom type criado acima) e inicializamos
//criamos um objeto com os métodos do model(mongoose)

export const PetModel: Model<Pet> = model("Pet", petSchema);
