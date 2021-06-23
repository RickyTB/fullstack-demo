import { Request, Response, Router } from "express";
import { TaskModel } from "../models";

const route = Router();

// Ruta get: Listar tareas
route.get("/", async (req: Request, res: Response) => {
  const tasks = await TaskModel.find().sort({ created: -1 });
  res.json(tasks);
});

// Ruta post: Agregar tarea
route.post("/:id", (req: Request, res: Response) => {
  //TODO
});

// Ruta put: Actualizar tarea
route.put("/:id", (req: Request, res: Response) => {
  //TODO
});

// Ruta delete: Eliminar tarea
route.delete("/:id", (req: Request, res: Response) => {
  //TODO
});

export default route;
