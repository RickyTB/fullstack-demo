import { Request, Response, Router } from "express";
import { TaskModel } from "../models";

const route = Router();

// Ruta get: Listar tareas
route.get("/", async (_: Request, res: Response) => {
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
route.put("/:id", async (req: Request, res: Response) => {
  const { text, done } = req.body;
  const { id } = req.params;
  const task = await TaskModel.findById(id);
  if (!task) {
    return res.status(404).json({ error: { message: "Tarea no encontrada." } });
  }
  task.text = text;
  task.done = done;
  await task.save();
  return res.json(task);
});

// Ruta delete: Eliminar tarea
route.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  await TaskModel.deleteOne({ _id: id });
  return res.json({ id });
});

export default route;
