import { config } from "dotenv";
import { json, Request, Response } from "express";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import { initMongo, app } from "./bin";
import apiRouter from "./api";

config();

initMongo();

app.use(helmet()); // set well-known security-related HTTP headers
app.use(compression());
app.use(cors({ origin: "*" }));
app.use(json());

app.disable("x-powered-by");

app.use("/api", apiRouter);

app.get("/", (_: Request, res: Response) =>
  res.send(
    "Ejemplo de CRUD API con Express y Mongoose. Por favor utiliza un frontend para interactuar."
  )
);

const port = process.env.PORT || 5000;
const server = app.listen(port, () =>
  console.log(`Starting ExpressJS server on Port ${port}`)
);

export default server;
