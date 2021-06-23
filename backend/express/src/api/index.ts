import { Router } from "express";
import taskRouter from "./task";

const route = Router();

route.use("/tasks", taskRouter);

export default route;
