import { config } from "dotenv";
import { json } from "express";
import app from "./app";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import initMongo from "./bin/db";

config();

initMongo();

app.use(helmet()); // set well-known security-related HTTP headers
app.use(compression());
app.use(cors());
app.use(json());

app.disable("x-powered-by");

const port = process.env.PORT || 5000;
const server = app.listen(port, () =>
  console.log(`Starting ExpressJS server on Port ${port}`)
);

export default server;
