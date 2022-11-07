import dotenv from "dotenv";
import express from "express";
import { mongoConnect } from "./db/mongo.connection";
import petsRoutes from "./pets/routes/pet.routes";

mongoConnect();
const app = express();
app.use(express.json());
app.use("/pets", petsRoutes);
app.listen(3000, () => console.log("Server is running on port 3000"));
