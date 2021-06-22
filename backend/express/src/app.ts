import express, { Request, Response } from "express";
import apiRouter from "./api";

const app = express();

app.get("/", (req: Request, res: Response) =>
  res.send(
    "Ejemplo de CRUD API con Express y Mongoose. Por favor utiliza un frontend para interactuar."
  )
);

app.use("/api", apiRouter);

export default app;
