import { Router } from "express";
import taskRouter from "./task";

const route = Router();

route.use("/task", taskRouter);

export default route;
