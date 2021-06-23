import { Request, Response, Router } from "express";
import { TaskModel } from "../models";

const route = Router();

// Ruta get: Listar tareas
route.get("/", async (req: Request, res: Response) => {
  const tasks = await TaskModel.find().sort({ created: -1 });
  res.json(tasks);
});

// Ruta post: Agregar tarea
route.post("/", async (req: Request, res: Response) => {
  const { text, done } = req.body;
  const task = await TaskModel.create({
    text,
    done,
    created: new Date(),
  });
  res.json(task);
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
