import dotenv from "dotenv";
import express from "express";
import { mongoConnection } from "./db/mongo.connection";
import petsRoutes from "./pets/routes/pet.routes";

mongoConnection();
const app = express();
app.use(express.json());
app.use("/users", petsRoutes);
app.listen(3000, () => console.log("Server is running on port 3000"));
